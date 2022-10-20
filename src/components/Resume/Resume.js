import React from 'react'
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer"
import Form from 'react-bootstrap/Form';
import './Resume.css'
function Resume() {
  return (
    <>
    <Header/>
    <div className="resu-img"> </div>
       
<Form>
<Form.Group className="mb-3" controlId="formBasicNmae">
      {/* <Form.Text className="text-muted">
          Enter your Name
        </Form.Text> */}
        <label class="form-label form-label-left" id="label_4" for="input_4">Last Name<span class="form-required">*</span></label>
        <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
        <label class="form-label form-label-left form-label-auto" id="label_16" for="input_16undefined"> Address </label>
        <Form.Control type=" " placeholder="" />
      <Form.Text className="text-muted">
          Street Address
        </Form.Text>
        </Form.Group>
        <Form.Text className="text-muted">
        City
        </Form.Text>
        < input type="text" id="input_16_city" name="address16[city]"  data-defaultvalue="" autocomplete="section-input_16 address-level2" value="" data-component="city" aria-labelledby="label_16 sublabel_16_city"/>
       
        <Form.Text className="text-muted">
        State
        </Form.Text>
       <input type="text" id="input_16_state" name="address16[state]"  data-defaultvalue="" autocomplete="section-input_16 address-level2" value="" data-component="state" aria-labelledby="label_16 sublabel_16_state">
       </input>
       

   
     
      


<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
<li class="form-line" data-type="control_fileupload" id="id_303">
<label class="form-label form-label-left form-label-auto" id="label" for="input"> Upload Resume: </label>
<div id="resume" class="form-input">
<input type="file" id="input" name="uploadResume" class="form-upload validate[upload]" data-imagevalidate="yes" data-file-accept="pdf, doc, docx, xls, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif" data-file-maxsize="10240" data-file-minsize="0" data-file-limit="0" data-component="fileupload"/>
</div>
</li>

 </Form> 
 <Footer/> 
   
    </>
   
  )
}

export default Resume