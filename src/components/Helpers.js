import { useEffect, useState } from 'react';

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
    .then(response => {
      if (!response.ok) { throw response }
      return response.json()
    })
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
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
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
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
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
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
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
    url: `https://galleries/${galleryId}`,
    headers: {
      "content-type": "application/json",
      authorization: ` ${token}`,
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
    url: `https://images/${imageId}`,
    headers: {
      "content-type": "application/json",
      authorization: ` ${token}`,
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
    url: `https://images/${videoId}`,
    headers: {
      "content-type": "application/json",
      authorization: ` ${token}`,
      accept: "application/json",
      project: "winbet.bg"
    },
    json: true
  };

  return request(options);
}