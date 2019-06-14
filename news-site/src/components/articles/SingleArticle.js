import React, { Fragment, Component } from "react";
import FullDate from "../FullDate";
import noImage from '../../images/no_image.jpg';
import Sidebar from '../Sidebar';
import {ReactTitle} from 'react-meta-tags';
import {
  asyncForEach,
  getImage,
  getVideo,
} from "../Helpers";

class SingleArticle extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }
  async componentDidMount() {
      window.scrollTo(0, 0);
    const id  = this.props.id;
    const { news } = this.props;
    const filtered = news.filter(x => x.id === id);
    const firstArticle = filtered[0];
    if (!firstArticle) {
      return;
    }
      // const firstArticle = this.props.data;
      await this.shapeObject(firstArticle);
    }
  componentDidUpdate() {
    // Create the element

    let script = document.createElement("script");
    script.async = true;

    // Add script content

    script.innerHTML =
      "new SMPWidgetsLoader({CDN_URL: 'https://widgets.sportal365.com'});";

    // Append

    document.body.appendChild(script);
  }

  shapeObject = async article => {
    const shapedContent = [];
    const  token  = this.props.token;

    let prom = new Promise((resolve, reject) => {
      if (article.body.length < 1) {
        resolve();
      } else {
        asyncForEach(article.body, async (item, index) => {
          // await waitFor(50);
          if (item.type === "editor_block") {
            shapedContent.push(item);
            if (index === article.body.length - 1) {
              return resolve();
            } else {
              return;
            }
          }
          if (item.type === "embed") {
            shapedContent.push(item);
            if (index === article.body.length - 1) {
              return resolve();
            } else {
              return;
            }
          }
          if (item.type === "widget_smp") {
            shapedContent.push(item);
            if (index === article.body.length - 1) {
              return resolve();
            } else {
              return;
            }
          }
          if (item.type === "image") {
             
            const  id  = item.data.id;

            try {
              const imageResponse = await getImage(id, token);

              const { urls } = imageResponse.data;
         
              shapedContent.push({
                type: item.type,
                imageUrls: urls.uploaded
              });

              if (index === article.body.length - 1) {
                return resolve();
              } else {
                return;
              }
            } catch (error) {
              console.info(error);
            }
          }
          if (item.type === "video") {
            const { id } = item.data;
            try {
              const videoResponse = await getVideo(id, token);

              shapedContent.push({
                type: item.type,
                data: videoResponse.data
              });

              if (index === article.body.length - 1) {
                return resolve();
              } else {
                return;
              }
            } catch (error) {
              console.info(error);
            }
          }
          if (item.type === "highlight") {
            shapedContent.push(item);
            if (index === article.body.length - 1) {
              return resolve();
            } else {
              return;
            }
          }
          if (item.type === "link") {
            shapedContent.push(item);
            if (index === article.body.length - 1) {
              return resolve();
            } else {
              return;
            }
          }
        });
      }
    });

    prom.then(() => {
      this.setState({
        content: shapedContent,
        image: article.image.data 
        ? article.image.data.urls.uploaded.gallery
        : undefined,
        title : article.title,
        created_at: article.created_at
      });
    });
  };

  renderEmbededContent = (content, className, index) => {
    const customClassDemo = `${className}`;
    return (
      <div
        key={index}
        className={customClassDemo}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  renderWidget = (content, index, widgetId) => {
    const innerHTML = content.replace(
      "data-widgetid='undefined'",
      `data-widgetid='${widgetId}'`
    );

    return (
      <div
        key={index}
        className="marginBottom"
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    );
  };

  renderContent = (item, index) => {
    if (item.type === "editor_block") {
      const { content } = item.data;
      return this.renderEmbededContent(content, "", index);
    }

    if (item.type === "embed") {
      const { content } = item.data;
      return this.renderEmbededContent(
        content,
        "custom-demo-embeded-video",
        index
      );
    }

    if (item.type === "widget_smp") {
      const { content, config } = item.data;
      const { widgetId } = config;
      return this.renderWidget(content, index, widgetId);
    }

    if (item.type === "gallery") {
      const { images } = item;

      return this.renderImageGallery(images, index);
    }

    if (item.type === "image") {
      const { imageUrls } = item;
      const { gallery } = imageUrls;

      return <img key={index} src={gallery} alt="winbet niews" />;
    }

    if (item.type === "video") {
      const contentArray = item.data.body;
      return contentArray.map((cont, ind) => this.renderContent(cont, ind));
    }

    if (item.type === "highlight") {
      const { description, title } = item.data;
      return (
        <div key={index} className="demo-custom-highlight-container">
          <p className="title">{title}</p>
          <p className="inner-content-paragraph">{description}</p>
        </div>
      );
    }

    if (item.type === "link") {
      const { url, text } = item.data;
      return (
        <a key={index} className="demo-custom-link" href={url} target="_blank" rel="noopener noreferrer">
          <div className="demo-custom-link-text">
            <p className="inner-content-paragraph">{text}</p>
          </div>
        </a>
      );
    }
    // TODO - delete when old data is fixed
    if (item.type === "editorBlock") {
      const { content } = item.data;
      return this.renderEmbededContent(content, "", index);
    }
    if (item.type === "embedBlock") {
      const { content } = item.data;
      return this.renderEmbededContent(
        content,
        "custom-demo-embeded-video",
        index
      );
    }
  };

  render() {
    const imageUrl = this.state.image;
    return (
      <Fragment>
        <div className="row">
        <ReactTitle title={this.state.title + " - Winbet"}/>
          <div className="col-md-8 col-sm-12 custom-mobile-grid">
            <div className="widget widget-news-article box-generic all-news-box">
              <div className="editor-content">
                <h2 className="title-heading">{this.state.title}</h2>
                <div className="time-block">
                  <FullDate date={this.state.created_at} customClass="time" />
                </div>
                {imageUrl ? (
                  <img src={imageUrl} alt="winbet news"/>
                ) : (
                  <img src={noImage} alt="winbet news" />
                )}
                {this.state.content.map((x, i) => this.renderContent(x, i))}
              </div>
            </div>
          </div>
          <Sidebar news={this.props.news}/>
        </div>
      </Fragment>
    );
  }
}

export default SingleArticle;





//----------------Old request logic for later usage
// import React, { Fragment, Component } from "react";
// import NewsDate from "./NewsDate";
// import noImage from '../images/no_image.jpg';
// import Sidebar from '../components/Sidebar';
// import {
//   asyncForEach,
//   getImage,
//   getVideo,
// } from "./Helpers";

// class SingleArticle extends Component {
//   constructor() {
//     super();
//     this.state = {
//       content: [],
//     };
//   }
//   async componentDidMount() {
//       window.scrollTo(0, 0);
//       const firstArticle = this.props.data;
//       await this.shapeObject(firstArticle);
//     }
//   componentDidUpdate() {
//     // Create the element

//     let script = document.createElement("script");
//     script.async = true;

//     // Add script content

//     script.innerHTML =
//       "new SMPWidgetsLoader({CDN_URL: 'https://widgets.sportal365.com'});";

//     // Append

//     document.body.appendChild(script);
//   }

//   shapeObject = async article => {
//     const shapedContent = [];
//     const  token  = this.props.token;

//     let prom = new Promise((resolve, reject) => {
//       if (article.body.length < 1) {
//         resolve();
//       } else {
//         asyncForEach(article.body, async (item, index) => {
//           // await waitFor(50);
//           if (item.type === "editor_block") {
//             shapedContent.push(item);
//             if (index === article.body.length - 1) {
//               return resolve();
//             } else {
//               return;
//             }
//           }
//           if (item.type === "embed") {
//             shapedContent.push(item);
//             if (index === article.body.length - 1) {
//               return resolve();
//             } else {
//               return;
//             }
//           }
//           if (item.type === "widget_smp") {
//             shapedContent.push(item);
//             if (index === article.body.length - 1) {
//               return resolve();
//             } else {
//               return;
//             }
//           }
//           if (item.type === "image") {
             
//             const  id  = item.data.id;

//             try {
//               const imageResponse = await getImage(id, token);

//               const { urls } = imageResponse.data;
         
//               shapedContent.push({
//                 type: item.type,
//                 imageUrls: urls.uploaded
//               });

//               if (index === article.body.length - 1) {
//                 return resolve();
//               } else {
//                 return;
//               }
//             } catch (error) {
//               console.info(error);
//             }
//           }
//           if (item.type === "video") {
//             const { id } = item.data;
//             try {
//               const videoResponse = await getVideo(id, token);

//               shapedContent.push({
//                 type: item.type,
//                 data: videoResponse.data
//               });

//               if (index === article.body.length - 1) {
//                 return resolve();
//               } else {
//                 return;
//               }
//             } catch (error) {
//               console.info(error);
//             }
//           }
//           if (item.type === "highlight") {
//             shapedContent.push(item);
//             if (index === article.body.length - 1) {
//               return resolve();
//             } else {
//               return;
//             }
//           }
//           if (item.type === "link") {
//             shapedContent.push(item);
//             if (index === article.body.length - 1) {
//               return resolve();
//             } else {
//               return;
//             }
//           }
//         });
//       }
//     });

//     prom.then(() => {
//       this.setState({
//         content: shapedContent
//       });
//     });
//   };

//   renderEmbededContent = (content, className, index) => {
//     const customClassDemo = `${className}`;
//     return (
//       <div
//         key={index}
//         className={customClassDemo}
//         dangerouslySetInnerHTML={{ __html: content }}
//       />
//     );
//   };

//   renderWidget = (content, index, widgetId) => {
//     const innerHTML = content.replace(
//       "data-widgetid='undefined'",
//       `data-widgetid='${widgetId}'`
//     );

//     return (
//       <div
//         key={index}
//         className="marginBottom"
//         dangerouslySetInnerHTML={{ __html: innerHTML }}
//       />
//     );
//   };

//   renderContent = (item, index) => {
//     if (item.type === "editor_block") {
//       const { content } = item.data;
//       return this.renderEmbededContent(content, "", index);
//     }

//     if (item.type === "embed") {
//       const { content } = item.data;
//       return this.renderEmbededContent(
//         content,
//         "custom-demo-embeded-video",
//         index
//       );
//     }

//     if (item.type === "widget_smp") {
//       const { content, config } = item.data;
//       const { widgetId } = config;
//       return this.renderWidget(content, index, widgetId);
//     }

//     if (item.type === "gallery") {
//       const { images } = item;

//       return this.renderImageGallery(images, index);
//     }

//     if (item.type === "image") {
//       const { imageUrls } = item;
//       const { gallery } = imageUrls;

//       return <img key={index} src={gallery} alt="winbet niews" />;
//     }

//     if (item.type === "video") {
//       const contentArray = item.data.body;
//       return contentArray.map((cont, ind) => this.renderContent(cont, ind));
//     }

//     if (item.type === "highlight") {
//       const { description, title } = item.data;
//       return (
//         <div key={index} className="demo-custom-highlight-container">
//           <p className="title">{title}</p>
//           <p className="inner-content-paragraph">{description}</p>
//         </div>
//       );
//     }

//     if (item.type === "link") {
//       const { url, text } = item.data;
//       return (
//         <a key={index} className="demo-custom-link" href={url} target="_blank" rel="noopener noreferrer">
//           <div className="demo-custom-link-text">
//             <p className="inner-content-paragraph">{text}</p>
//           </div>
//         </a>
//       );
//     }
//     // TODO - delete when old data is fixed
//     if (item.type === "editorBlock") {
//       const { content } = item.data;
//       return this.renderEmbededContent(content, "", index);
//     }
//     if (item.type === "embedBlock") {
//       const { content } = item.data;
//       return this.renderEmbededContent(
//         content,
//         "custom-demo-embeded-video",
//         index
//       );
//     }
//   };

//   render() {
//     const imageUrl = this.props.data.image.data ? this.props.data.image.data.urls.uploaded.gallery : undefined;
//     return (
//       <Fragment>
//         <div className="row">
//           <div className="col-8">
//             <div className="widget widget-news-article box-generic all-news-box">
//               <div className="editor-content">
//                 <h2 className="title-heading">{this.props.data.title}</h2>
//                 <div className="time-block">
//                   <NewsDate date={this.props.data.updated_at} customClass="time" />
//                 </div>
//                 {imageUrl ? (
//                   <img src={imageUrl} alt="winbet news"/>
//                 ) : (
//                   <img src={noImage} alt="winbet news" />
//                 )}
//                 {this.state.content.map((x, i) => this.renderContent(x, i))}
//               </div>
//             </div>
//           </div>
//           <Sidebar/>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default SingleArticle;