import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='3a96t5kwhybhxjo9t7po0tzpvonov1k5z13vodlbn2y1v4o5'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}
// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller } from 'react-hook-form';

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   return (
//     <div className="w-full">
//       {label && (
//         <label className="inline-block mb-1 pl-1 text-yellow-400 text-sm font-medium">
//           {label}
//         </label>
//       )}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey="3a96t5kwhybhxjo9t7po0tzpvonov1k5z13vodlbn2y1v4o5"
//             initialValue={defaultValue}
//             init={{
//               height: 400,
//               menubar: false,
//               skin: "oxide-dark",
//               content_css: "dark",
//               plugins: [
//                 "advlist autolink lists link image charmap preview anchor",
//                 "searchreplace visualblocks code fullscreen",
//                 "insertdatetime media table code help wordcount"
//               ],
//               toolbar:
//                 "undo redo | formatselect | bold italic underline forecolor | \
//                  alignleft aligncenter alignright alignjustify | \
//                  bullist numlist outdent indent | link image media | removeformat | code fullscreen",
//               branding: false,
//               content_style: `
//                 body {
//                   background-color: #1a1a1a;
//                   color: #f5f5dc;
//                   font-family: Inter, Helvetica, Arial, sans-serif;
//                   font-size: 15px;
//                 }
//               `,
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }
