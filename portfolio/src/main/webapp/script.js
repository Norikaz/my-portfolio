// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
async function displayMessage(){
    const responseFromServer = await fetch('hello');
    const list = await responseFromServer.json();
    // const textConatiner = document.getElementById('message-container');
    // textConatiner.innerText = list;
    addRandomMessage(list);
}
function addRandomMessage(list) {

  // Pick a random greeting.
  const random_text = list[Math.floor(Math.random() * list.length)];

  // Add it to the page.
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerText = random_text;
}
function createMap(){
    const Tokyo = {lat:35.686, lng: 139.774}
    const map = new google.maps.Map(
        document.getElementById("map"),{
        center:Tokyo, 
        zoom: 4
    });
    const marker = new google.maps.Marker({
        position:Tokyo,
        map:map,
        title:"Want to visit"
    });

}
