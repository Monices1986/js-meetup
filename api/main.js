function run() {
    loadRandomBackground();
    setLogo();
    setDogImage();
    setIpAddress();
    setPersonName();
  }

  function loadRandomBackground() {
    let images = [
      "landscape-001.jpg",
      "landscape-002.jpg",
      "landscape-003.jpg",
      "landscape-004.jpg",
      "landscape-005.jpg",
    ];
    let randomNumber = Math.floor(Math.random() * images.length);
    document.body.style.background =
      "url(./img/" + images[randomNumber] + ") no-repeat center center";
  }

  function setLogo() {
    let logoUrl =
      "https://ucarecdn.com/8c798d25-f03a-43d2-9a92-13f9e9b08fad/Layer2.svg&w=96&q=75";
    let logoImage = document.getElementById("logo");
    logoImage.src = logoUrl;
  }

  async function setDogImage() {
    const dogApi = "https://dog.ceo/api/breeds/image/random";
    let dogData = await fetchFromApi(dogApi);
    let dogImage = document.getElementById("dogImage");
    dogImage.src = dogData.message;
  }

  async function setIpAddress() {
    const ipApi = " https://api.bigdatacloud.net/data/client-ip";
    let ipData = await fetchFromApi(ipApi);
    let ipField = document.getElementById("ipAddress");
    ipField.textContent = 'Your IP address is: ' + ipData.ipString;
}

  async function setPersonName() {
    const personApi = "https://randomuser.me/api/";
    let personData = await fetchFromApi(personApi);
    let personNameHeader = document.getElementById("personName");
    let personName = personData.results[0].name.first + ' ' + personData.results[0].name.last;
    personNameHeader.textContent = 'Meet my dog, ' + personName;
  }

  async function fetchFromApi(link) {
    let response = await fetch(link);
    let jsonData = await response.json();
    return jsonData;
  }

  run();