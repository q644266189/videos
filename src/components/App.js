import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("building");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onSelectVideo = (video) => {
  //   setVideo(video);
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onSelectVideo={(video) => setSelectedVideo(video)}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };
//   componentDidMount() {
//     this.onTermSubmit("building");
//   }
//   onSelectVideo = (video) => {
//     this.setState({ selectedVideo: video });
//   };
//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", { params: { q: term } });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo}></VideoDetail>
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 videos={this.state.videos}
//                 onSelectVideo={this.onSelectVideo}
//               ></VideoList>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
