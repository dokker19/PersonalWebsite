import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        (async () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
              }, 3000)
        })();
    }, [])
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "service_jejdtx2",
            "template_ttfvwak",
            refForm.current,
            "LHhzDmzYRfQUkYgoP",
        ).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                console.log(refForm.current)
                alert('Failed to sent the message, please try again!')
            }
        )
    }

    return (
        <>
        <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in all kinds of opportunities - especially on ambitious
            or large projects. However, if you have any other requests, questions, or anything, really, 
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Your name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Your email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24689.289584133767!2d-76.63798438427744!3d39.32993319048252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804df8502f88d%3A0x303d58494fa04c66!2sJohns%20Hopkins%20University!5e0!3m2!1sen!2sus!4v1666495508648!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" title="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact;