import React,{useEffect, useState} from 'react'

const FileUpload = ({transcription,setTranscription,loading,setLoading}) => {
const [file,setFile] = useState(null);


const handleFileChange = (e) =>{
    
    if (e.target.files){
        let file = e.target.files[0]
        setFile(file)
    }
   

}

const handleUploadClick =async () =>{
  setLoading(true);
    if(!file){
        return;
    }

    try {
        const formData = new FormData();
        formData.append("audio", file);

        const response = await fetch(
          "https://api-inference.huggingface.co/models/facebook/mms-1b-fl102",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer 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",
            },
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          setTranscription(result.text);
        } else {
          console.error("Error transcribing audio");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }





  return (
    <div className='mb-1'>
      <div>
      <label htmlFor="formFile" className="mb-2 inline-block">
					Upload a Audio File
		</label>
        <input
					className="relative file:bg-secondary file:uppercase text-xs file:text-xs file:px-6 file:pb-2 file:pt-2.5 text-secondary m-0 block w-full min-w-0 flex-auto rounded border border-solid border-[#DEF2F1] bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:text-black file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]"
					type="file"
					id="formFile"
                    onChange={handleFileChange}
					
				/>
      </div>
      <div className={"text-right py-3"}>
        {loading?(
        				<button
                type="button"
                disabled={loading}
                className="inline-block border border-solid border-black-700 rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary shadow-sm transition duration-150 ease-in-out hover:bg-dark hover:shadow-md disabled:bg-light disabled:cursor-not-allowed">
                          Loading...
              </button>
        ) :(
				<button
					type="button"
					onClick={handleUploadClick}
					className="inline-block border border-solid border-black-700 rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary shadow-sm transition duration-150 ease-in-out hover:bg-dark hover:shadow-md disabled:bg-light disabled:cursor-not-allowed">
                    UPLOAD
				</button>
        )
}
			</div>
    </div>
  )
}

export default FileUpload