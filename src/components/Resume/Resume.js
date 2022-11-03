import React from 'react'
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './Resume.css'
function Resume() {
  return (
    <>
   

    <Header/>
    <div className="resu-img"> </div>
       
<Form>
<container>
<Col sm={8}>

<Form.Group className="md-4" controlId="formBasicNmae">
        <label class="form-label " id="label_4" for="input_4">First Name<span class="form-required">*</span></label>
        <Form.Control type="name" placeholder="First Name" />
        </Form.Group>

<Form.Group className="md-4" controlId="formBasicNmae">
        <label class="form-label form-label-left" id="label_4" for="input_4">Last Name<span class="form-required">*</span></label>
        <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <label class="form-label form-label-top form-label-auto" id="label_18" for="input_18"> Birth Date </label>
        <select name="birthDate[month]" id="input_18_month" class="form-dropdown" data-component="birthdate-month" aria-labelledby="label_18 sublabel_18_month"><option> </option>
        <option value="January"> January </option>
        <option value="February"> February </option>
        <option value="March"> March </option>
        <option value="April"> April </option>
        <option value="May"> May </option>
        <option value="June"> June </option>
        <option value="July"> July </option>
        <option value="August"> August </option>
        <option value="September"> September </option>
        <option value="October"> October </option>
        <option value="November"> November </option>
        <option value="December"> December </option>
       </select>
        <Form.Text className="text-month">
          Month
        </Form.Text>

        <select name="birth-day" id="input_day" class="form-dropdown" data-component="birthdate-day" aria-labelledby="label_day"><option> </option>
        <option value="1"> 1 </option>
        <option value="2"> 2 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
        <option value="6"> 6 </option>
        <option value="7"> 7 </option>
        <option value="8"> 8 </option>
        <option value="9"> 9 </option>
        <option value="10"> 10 </option>
        <option value="11"> 11</option>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
        <option value="15"> 15 </option>
        <option value="16"> 16 </option>
        <option value="17"> 17 </option>
        <option value="18"> 18 </option>
        <option value="19"> 19 </option>
        <option value="20"> 20 </option>
        <option value="21"> 21 </option>
        <option value="22"> 22 </option>
        <option value="23"> 23</option>
        <option value="24"> 24 </option>
        <option value="25"> 25 </option>
        <option value="26"> 26 </option>
        <option value="27"> 27 </option>
        <option value="28"> 28</option>
        <option value="29"> 29 </option>
        <option value="30"> 30</option>
        <option value="31"> 31 </option>
       </select>
        <Form.Text className="text-day">
          Day
        </Form.Text>

        <select name="birth-day" id="input_day" class="form-dropdown" data-component="birthdate-day" aria-labelledby="label_day"><option> </option>
        <option value="1"> 2023 </option>
        <option value="2"> 2022 </option>
        <option value="3"> 2021</option>
        <option value="4"> 2020 </option>
        <option value="5"> 2019 </option>
        <option value="6"> 2018 </option>
        <option value="7"> 2017</option>
        <option value="8"> 2016 </option>
        <option value="9"> 2015 </option>
        <option value="10"> 2014 </option>
        <option value="11"> 2013</option>
        <option value="12"> 2012 </option>
        <option value="13"> 2011 </option>
        <option value="14"> 2010 </option>
        <option value="15"> 2009 </option>
        <option value="16"> 2008 </option>
        <option value="17"> 2007 </option>
        <option value="18"> 2006</option>
        <option value="19"> 2005 </option>
        <option value="20"> 2004 </option>
        <option value="21"> 2003 </option>
        <option value="22"> 2002 </option>
        <option value="23"> 2001</option>
        <option value="24"> 2000 </option>
        <option value="25"> 1999 </option>
        <option value="26"> 1998</option>
        <option value="27"> 1997 </option>
        <option value="28"> 1996</option>
        <option value="29"> 1995 </option>
        <option value="30"> 1994</option>
        <option value="31"> 1993</option>
        <option value="25"> 1992 </option>
        <option value="26"> 1991</option>
        <option value="27"> 1990 </option>
        <option value="28"> 1989</option>
        <option value="29"> 1988 </option>
        <option value="30"> 1987</option>
        <option value="31"> 1986</option>
       </select>
        <Form.Text className="text-year">
          Year
        </Form.Text>

        <Form.Group className="md-3" controlId="formBasicAddress">
        <label class="form-label form-label-left form-label-auto" id="label_16" for="input_16undefined"> Address </label>
        <Form.Control type=" " placeholder="" />
      <Form.Text className="text-muted">
          Street Address
        </Form.Text>
        </Form.Group>
        
        <Form.Group>
        <Form.Text className="text-muted">
        City
        </Form.Text>
        < input type="text" id="input_16_city" name="address16[city]"   class="form-textbox form-address-city" data-defaultvalue="" autocomplete="section-input_16 address-level2" value="" data-component="city" aria-labelledby="label_16 sublabel_16_city"/>
        
        <Form.Text className="text-muted">
        State
        </Form.Text>
        <input type="text" id="input_16_state" name="address16[state]" class="form-textbox form-address-state" data-defaultvalue="" autocomplete="section-input_16 address-level1" value="" data-component="state" aria-labelledby="label_16 sublabel_16_state"/>
        </Form.Group>

       <br></br>
        <Form.Text className="text-muted">
        Zip Code/Postal
        </Form.Text>
        <input type="text" id="input_16_postal" name="postal_16[postal]" class="form-textbox form-postal" data-defaultvalue="" autocomplete="section-input_16 address-level3" value="" data-component="Zip Code" aria-labelledby="label_16 sublabel_16_postal"/>
       
      
      <Form.Group>
        <label class="form-label-form" id="label_4" for="input_4">How were you referred to us?<span class="form-required">*</span></label>
        <div className="topping">
<input type="checkbox" id="topping" name="topping" value="NewspaperAd" /> Newspaper Ad
</div>
    
<div className="topping">
<input type="checkbox" id="topping" name="topping" value="whatsApp" />  Whats App
</div>
  
<div className="topping">
<input type="checkbox" id="topping" name="topping" value="Facebook" />  Facebook
</div>

<div className="topping">
<input type="checkbox" id="topping" name="topping" value="Facebook" /> Linkin
</div>

<div className="topping">
<input type="checkbox" id="topping" name="topping" value="Facebook" /> Others(please specify)
</div>
<Form.Text className="text-muted">
  Other
  </Form.Text>
    <input type="text" id="input" name="other"   />
</Form.Group>

<Form.Label>JOB Skills and Training</Form.Label>
  <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <label class="form-label form-label-left" id="label_4" for="input_4">Describe your skills<span class="form-required">*</span></label>
        <Form.Control type="" placeholder="" />
      </Form.Group>
    
      <label class="form-label form-label-top form-label-auto" id="label_14" for="input_14"> Position Applied </label>
      <select name="position" id="input_position" class="form-dropdown" data-component="position-job" aria-labelledby="label_position"><option> Please Select</option>
        <option value="software DEveloper"> software DEveloper</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales Manager"> Sales Manager</option>
        <option value="Data Scientist"> Data Scientist </option>
        <option value="Data Analyst"> Data Analyst </option>
        </select>
<li class="form-line" data-type="control_fileupload" id="id_303">
<label class="form-label form-label-left form-label-auto" id="label" for="input"> Upload Resume: </label>
<div id="resume" class="form-input">
<input type="file" id="input" name="uploadResume" class="form-upload validate[upload]" data-imagevalidate="yes" data-file-accept="pdf, doc, docx, xls, csv, txt, rtf, html, zip, mp3, wma, mpg, flv, avi, jpg, jpeg, png, gif" data-file-maxsize="10240" data-file-minsize="0" data-file-limit="0" data-component="fileupload"/>
</div>
</li>
<br></br>
 <Button variant="primary" type="submit">
        Submit Application
      </Button>
      </Col>
      </container>
 </Form> 


   
    </>

   
  )
}

export default Resume