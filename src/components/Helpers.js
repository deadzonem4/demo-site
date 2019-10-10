import { useEffect, useState } from 'react';
import moment from 'moment';
import localization from 'moment/locale/bg';

export const useHttps = (url, token) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, { 
      method: 'get', 
      headers: new Headers({
        "content-type": "application/json",
        authorization: token,
        accept: "application/json",
        project: "winbet.bg"
      }), 
    })
    .then(response => (
      response.json())
    )
    .then(data => {
      setLoading(false);
      setData(data)
    })
    .catch(error => {
      console.log('error');
    });
  }, [url, token]);

  return [loading, data];
}

export const useHttpsInterval = (url, token) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = () =>{
      fetch(url, { 
        method: 'get', 
        headers: new Headers({
          "content-type": "application/json",
          authorization: token,
          accept: "application/json"
        }),
      })
      .then(response => (
        response.json())
      )
      .then(data => {
        setLoading(false);
        setData(data);
      })
      .catch(error => {
        console.log('error');
      });
    }
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 20000);
    return () => clearInterval(interval);
  }, [url, token]);

  return [loading, data];
}     

export const useHttpsStore = (url, token, store, storeDate) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const date = sessionStorage.getItem(storeDate);
  const promoDate = date && new Date(parseInt(date));
  const now = new Date();
  const dataAge = Math.round((now - promoDate) / (1000*60))
  const tooOld = dataAge >= 1;

  useEffect(() => {

    const fetchData = () =>{
      fetch(url, { 
        method: 'get', 
        headers: new Headers({
          "content-type": "application/json",
          authorization: token,
          accept: "application/json",
          project: "winbet.bg"
        }),
      })
      .then(response => (
        response.json())
      )
      .then(data => {
        setLoading(false);
        setData(data);
        sessionStorage.setItem(store, JSON.stringify(data));
        sessionStorage.setItem(storeDate, Date.now());
      })
      .catch(error => {
        console.log('error');
      });
    }
    if (!sessionStorage.getItem(store) || tooOld) {
      fetchData();
    }
    else{
      setData(JSON.parse(sessionStorage.getItem(store)));
      setLoading(false);
    }
  }, [url, token, store, storeDate, tooOld]);

  return [loading, data];
}

export const useHttpsStoreFooter = (url, token, store, storeDate) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const date = sessionStorage.getItem(storeDate);
  const promoDate = date && new Date(parseInt(date));
  const now = new Date();
  const dataAge = Math.round((now - promoDate) / (1000*60))
  const tooOld = dataAge >= 1;

  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem(store)));
    setLoading(false);

    const fetchData = () =>{
      fetch(url, { 
        method: 'get'
      })
      .then(response => (
        response.json())
      )
      .then(data => {
        setLoading(false);
        setData(data);
        sessionStorage.setItem(store, JSON.stringify(data));
        sessionStorage.setItem(storeDate, Date.now());
      })
      .catch(error => {
        console.log('error');
      });
    }
    if (!sessionStorage.getItem(store) || tooOld) {
      fetchData();
    }
  }, [url, token, store, storeDate, tooOld]);

  return [loading, data];
}

const request = require("request-promise");

export async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export function waitFor(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export async function getGallery(galleryId, token) {
 let options = {
    method: "GET",
    url: ``,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
      accept: "application/json",
      project: "winbet.bg"
    },
    json: true
 };

 return request(options);
}

export async function getImage(imageId, token) {
  let options = {
    method: "GET",
    url: ``,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
      accept: "application/json",
      project: "winbet.bg"
    },
    json: true
  };

  return request(options);
}

export async function getVideo(videoId, token) {
  let options = {
    method: "GET",
    url: ``,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
      accept: "application/json",
      project: "winbet.bg"
    },
    json: true
  };

  return request(options);
}

export const checkArticlesDate = (date) => {

  const newsDate = `${moment(date).locale("bg", localization).format("YYYY-MM-DDTHH:mm")}`;
  const currDate = `${moment().locale("bg", localization).format("YYYY-MM-DDTHH:mm")}`;
  const dateChecker = (newsDate < currDate)? true : false;
  
  return(dateChecker);
}

export const sortArticles = (array) => {

  const sortedArray = array ? array.sort((a,b) => (a.published_at < b.published_at) ? 1 : ((b.published_at < a.published_at) ? -1 : 0)) : [];
  
  return (sortedArray);
}

export const useHandleHttp = (url) =>{

  const [leagueSeason, setLeagueSeason] = useState(0);

  useEffect(() => {

    fetch(url, { 
      method: 'get', 
      headers: new Headers({
        "content-type": "application/json",
        authorization: "",
        accept: "application/json"
      }), 
    })
    .then(response => (
      response.json())
    )
    .then(api => {
      setLeagueSeason(api.seasons[0].id);
      sessionStorage.setItem('season', JSON.stringify(leagueSeason));
    })
    .catch(error => {
      console.log('error');
    });

  }, [leagueSeason, url]);

  return leagueSeason;
}