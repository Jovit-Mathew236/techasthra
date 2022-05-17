import React, { useContext, useState } from 'react'
import { unstable_HistoryRouter } from 'react-router-dom'
import { FirebaseContext } from '../store/Contexts'
import './form.css'
import './Head.css'

function Techasthra() {
    const history = unstable_HistoryRouter

    const { firebase } = useContext(FirebaseContext)
    const [regNo, setRegNo] = useState(0)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [college, setCollege] = useState('')


    // allet box Function
    const okFunc = () => {
        var pop = document.getElementById("pop")
        var popcont = document.getElementById("popcont")
        pop.classList.remove("hide")
        pop.classList.add("show")
        popcont.classList.add("alert-container-show")
        setTimeout(() => {
            pop.classList.remove("show")
            pop.classList.add("hide")
        }, 5000)
    }
    const closeFunc = () => {
        var pop = document.getElementById("pop")
        pop.classList.remove("show")
        pop.classList.add("hide")
    }// alert box function close


    // calling resitration number
    firebase.firestore().collection('Registration Number Tech Asthra').doc('unique').get().then((res) => {
        setRegNo(res.data().number)
    })


    // submit btn function
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('Registration Number Tech Asthra').doc('unique').update({
            number: regNo + 1
        })

        firebase.firestore().collection('Contestant Tech Asthra').add(
            {
                "Name": name,
                "Phone no.": phone,
                "Email": email,
                "College": college
            }).then((alert) => {
                console.log("suscces");
                okFunc()
                setTimeout(history.go(0), 4000)
            });

    }
    return (
        <div className='techasthra'>
            <div className='head-box'>
                <div className='head'>
                    <h1>TECH-ASTHRA HACKATHON</h1>
                    <p>
                        This is a general hackathon event where the participants will have to win
                        different stages of technical tasks assigned to them.
                        They will be given an engineering problem faced by the society at the
                        beginning of the event and towards the end they will have to build a
                        working prototype as an engineering solution for the problem.
                        There will be coding rounds where students will be tested on their computer
                        coding skills and also there will be technical quizzes and interviews which
                        each participant team will have to win.  <br />
                        <b>Prize Pool : 5k</b>               </p>
                </div>
            </div>
            <div className='form'>
                <div>
                    <form method='get'>
                        <div className='form-inp-field'>
                            <div className='form-field'>
                                {/* <label> Resitration number</label><br /><br />
                                <input type="number" name="name" value={regNo} required='required' disabled /><br /><br /> */}
                                <label>Name</label><br /><br />
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required='required' /><br /><br />
                                <label>Phone</label><br /><br />
                                <input type="number" name="name" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' required /><br />
                            </div>
                            <div className='form-field'>
                                <label>Email</label><br /><br />
                                <input type="email" name="name" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='yourname@gamil.com' required /><br /><br />
                                <label>College</label><br /><br />
                                <input type="text" name="name" value={college} onChange={(e) => setCollege(e.target.value)} placeholder='College name' required /><br />
                            </div>
                        </div>

                        <input type="submit" value="Submit" id='submit' onClick={handleSubmit} />
                    </form>
                    <div className="alertDiv">
                        <div id="popcont" className="alert-container">
                            <div id="pop" className="alert-box hide">
                                <div className="alert-contant">
                                    <h1>Succsess</h1>
                                    <hr />
                                    <form>
                                        <p>Submission Successfull, Thankyou</p>
                                        <button className="alert--ok-btn" onClick={closeFunc}>Ok</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techasthra