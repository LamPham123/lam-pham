// import React from "react";
// import { workLinks } from "@/lib/data";
// import Project from "@/components/Project";

// export default function FeaturedProjects() {
//   return (
//     <div className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-black text-3xl font-bold text-center mb-12">
//           Featured Work
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {workLinks.map((item) => (
//             <Project
//               key={item.hash}
//               name={item.name}
//               description="A brief description of the project and the technologies used."
//               technologies={["React", "Node.js", "MongoDB"]}
//               link={item.link || undefined} // Passing link if it exists
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
