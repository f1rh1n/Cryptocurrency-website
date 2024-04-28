import React from 'react'
import linkedinIcon from "../assets/linkedinIcon.png"
import githubIcon from "../assets/githubIcon.png"
import "./footer.css"

const Footer = () => {
  return (
    // <div>Made with ❤️ in NIET |   
    <footer>
		<div id="footer-last-part">
			<p className="author">
				Your one spot for all things crypto. <br/>
				<a href="http://linkedin.com/in/farhan-khan-237636201" target="_blank"><img src={linkedinIcon} width="22px"/></a>
				<a href="https://github.com/f1rh1n" target="_blank"><img src={githubIcon} width="22px "/></a>
			</p>
			<p className="copyright">Made with ❤️ in NIET &copy; 2024 &nbsp; </p>
		</div>
	</footer>
//  </div>
  )
}

export default Footer
