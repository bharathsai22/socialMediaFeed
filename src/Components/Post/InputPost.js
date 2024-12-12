import "../Post/InputPost.css"
import Profile from "../../assets/profile.jpg"

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';





const InputPost = ({handleSubmit,
                   setBody,
                   body,
                   images,
                   setImages
                  }) => {

  return (
     <div className="i-form">
        <form onSubmit={handleSubmit}>
            <div className="i-input-box">
                <img src={Profile} className='i-img'/>
                <input 
                type="text" 
                id="i-input" 
                placeholder=""
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
                <div>
                <p>Welcome Back</p>
                <h1>Sakshi Agarwal</h1></div>
            </div>

     <div className="file-upload">
      <div className="file-icons">
          <label htmlFor="file" className="pv-upload">
            
            <span className='photo-dis'></span>
          </label>

          <div className="pv-upload">
            
            <span className='photo-dis'></span>
          </div>

          <div className="pv-upload">
            
            <span className='photo-dis'></span>
          </div>

          <div className="pv-upload">
            
            <span className='photo-dis'></span>
          </div>
      </div>
       

            
      </div>

        <div style={{display:"none"}} >
            <input 
            type="file" 
            id="file"
            accept=".png,jpeg,.jpg"
            onChange={(e)=>setImages(e.target.files[0])}
             />
          </div>

        {images && (
          <div className="displayImg">
            <CloseRoundedIcon onClick={()=>setImages(null)}/>
            <img src={URL.createObjectURL(images)} alt="" />
          </div>
        )}

        </form>
     </div>
  )
}

export default InputPost