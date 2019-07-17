import React, { Component } from "react";
import Article from "./Article"
import "../style.css"
import "../Contact.css"

class About extends Component {
    render() {
        return (
            <div>
                <Article firstWord="About" secndWord="Me" firstInfo = "Hello there! My name is Alexander. Nowadays I'm 3rd year student at Computer Science and my particularly future specialization will be system developer. However, I don't see myself as system programmer. This site is aimed to share my knowledge and experience with my future potential employer. Here I want to post all my project which i had done for past time. Unfortunately, almost all of them has not been completed done yet. In addition, the web-site is done on React library and also the back-end is by .NET C#. In the section 'Projects' you can see my all project that helped me achieve to this level even if it's not great. And I'm not going to stop learning!"></Article>
                <Article firstWord="My" secndWord="Projects" firstInfo = "Before going to a university I was acquainted with the program code. The first language was Turbo Pascal that was taught at school. It's a pity I wasn't passionate then so deeply as now. After the school I enrolled to university where my first language there was C. During the first year we should have made a project with database. Then it was my first sight on declarative programming language. Next two years we're studying C languages. From the init of first years I knew that I will learn .NET C#. So, first of all I got acquainted with desktop developing on PC. However, I started  from WinForms than found out about more flexible and more modern technologies as WPF and UWP. I tried both of them. Despite of UWP I prefer WPF to previous one. If you surf on my github you will find the a few project but as I mentioned before either first or second one isn't done. I gave up because I didn't see any opportunity to find a job for this direction. So, I decided to change it. Nevertheless, I realized another technology in .NET packet - ASP.NET. Also, I have projects on the my github therefore you can go it over from the web-site."></Article>
            </div>
        );
    }
}

export default About;
