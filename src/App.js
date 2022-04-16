import "./styles.css";

const picurls = [
  "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/931/524/022714-NHL-Rangers-Sean-Avery-DG-PI-5d44a3a00e040510VgnVCM100000d7c1a8c0____.jpg?ve=1&tl=1",
  "https://sportshub.cbsistatic.com/i/r/2022/02/23/9d00e31d-37bc-48a0-922f-2aa7e3c7899b/thumbnail/1200x675/17364d6be80915eb47bee02d83ffb51b/sean-avery.jpg",
  "https://media.gettyimages.com/photos/sean-avery-of-the-new-york-rangers-argues-with-the-referee-for-a-call-picture-id96367244?s=612x612"
];
const pic = picurls.map((picurls) => (
  <a>
    <img src={picurls} alt="" />
  </a>
));

const App = () => {
  return <div>{pic}</div>;
};

export default App;
