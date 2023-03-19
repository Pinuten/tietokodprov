// import heroImg from "../assets/heroImg.png";
// import Button from 'react-bootstrap/Button';
// import React from "react";

// const Hero = () => {

//   if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
//     const heroImg = React.useRef(null);
//     const [isVisible, setIsVisible] = React.useState(false);

//     React.useEffect(() => {
//       const observer = new IntersectionObserver(([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       });

//       if (heroImg.current) {
//         observer.observe(heroImg.current);
//       }

//       return () => {
//         observer.disconnect();
//       };
//     }, [heroImg]);

    
  
  
  
  
//   return (
//       <div style={{ padding: "5rem 0 5rem 0"  }}>
//         <article
//           className="article"
//           style={{ backgroundImage: `url(${heroImg})` }}
//         >
//             <div className="text-overlay">
//                 <h3 >Proin eget tortor risus?</h3>
//                 <p>Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>
//                 <button id="grey-button" onClick={() => alert("Hello Tieto :)")}>Curabitur non</button>
//             </div>
//         </article>
//         </div>
//       );
// }
// }
// export default Hero
import heroImg from "../assets/heroImg.png";
import Button from 'react-bootstrap/Button';
import React from "react";

const Hero = () => {
  const heroImgRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      });

      if (heroImgRef.current) {
        observer.observe(heroImgRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [heroImgRef]);

  return (
    <div style={{ padding: "5rem 0 5rem 0"  }}>
      <article
        className="article"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="text-overlay">
          <h3 >Proin eget tortor risus?</h3>
          <p>Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>
          <button id="grey-button" onClick={() => alert("Hello Tieto :)")}>Curabitur non</button>
        </div>
      </article>
    </div>
  );
}

export default Hero;
