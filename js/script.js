$(document).ready(function () {

    populateMain();

    function populateMain() {
        $(".navbar").addClass("hide");
        $(".container").empty().hide().append(
            "<div class='row main-row animate__animated animate__fadeInDown animate__delay-1s'><div class='col-12 text-center header'><h1>Hi, I'm Nicolas </h1><h2>Welcome to my Portfolio! </h2><button type='button' class='btn btn-primary about'>About Me</button><button type='button' class='btn btn-primary portfolio'>Projects</button><button type='button' class='btn btn-primary contact' data-toggle='modal' data-target='#exampleModal'>Contact Me 📧</button></div></div>"
        ).fadeIn(400);
    }

    function populateAbout() {

        $(".container").empty().hide().append(

            "<div class='row'>" +
            "<div class='col-sm-8 offset-sm-2 img-col'>" +
            "<img src = 'images/nca.jpeg' class='about-img'>" +
            "<div class='row'>" +
            "<div class='col-sm-12'>" +
            "<i class='fab fa-html5 html left-icon'></i>" +
            "<i class='fab fa-css3-alt html'></i>" +
            "<i class='fab fa-js html'></i>" +
            "<i class='fab fa-react html'></i>" +
            "<i class='fab fa-node-js html right-icon'></i>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-sm-8 offset-sm-2 text-justify about-page'>" +
            "<p class='info'>Hi! I’m an engineer, a team player, a full-stack software developer, with a background in customer service, oil & gas drilling technologies and applications, with proven experience delivering client satisfaction through technical know-how and leadership.   Passionate about learning and known as a creative thinker, I got a certificate in full-stack development and I would never have thought that the conjunction of developing solutions for everyday living, solving complex problems and design-thinking were going to make me fall in love with coding.  In my current role as Software QA. With my set of skills  and experience I am planning on venturing to smart, automatic and integrated software systems.</p>" +
            "</div>" +
            "</div>"


        ).fadeIn(400);


        $(".navbar").removeClass("hide");
    }


    function populatePortfolio() {
        $(".container").empty().hide().append(

            "<div class='row'>" +
            "<div class='col-sm-4 card-style  d-flex align-items-stretch' id='item1'>" +
            "<div class='card'>" +
            "<img src='images/quiz.png' class='card-img-top' alt='picture of timed quiz application'>" +
            "<div class='card-body text-center'>" +
            "<h5 class='card-title'>JS Timed-Quiz</h5>" +
            "<a target='_blank' href='https://github.com/NAvena9/04-APIs-Timed-Quiz' class='btn btn-info port-btn'>Repo</a>" +
            "<a target='_blank' href='https://navena9.github.io/04-APIs-Timed-Quiz/' class='btn btn-primary port-btn'>Demo</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='col-sm-4 card-style d-flex align-items-stretch' id='item2'>" +
            "<div class='card'>" +
            "<img src='images/schedule.png' class='card-img-top' alt='picture of the scheduler app'>" +
            "<div class='card-body text-center'>" +
            "<h5 class='card-title'>Scheduler App</h5>" +
            "<a target='_blank' href='https://github.com/NAvena9/05-Work-Day-Scheduler' class='btn btn-info port-btn'>Repo</a>" +
            "<a target='_blank' href='https://navena9.github.io/05-Work-Day-Scheduler/' class='btn btn-primary port-btn'>Demo</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='col-sm-4 card-style d-flex align-items-stretch' id='item1'>" +
            "<div class='card'>" +
            "<img src='images/project.png' class='card-img-top center' alt='picture of pitch MyBookCloud'>" +
            "<div class='card-body text-center'>" +
            "<h5 class='card-title'>MyBookCloud</h5>" +
            "<a target='_blank' href='https://github.com/NAvena9/project1' class='btn btn-info port-btn'>Repo</a>" +
            "<a target='_blank' href='https://navena9.github.io/project1/' class='btn btn-primary port-btn'>Demo</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col-sm-4 card-style d-flex align-items-stretch' id='item4'>" +
            "<div class='card'>" +
            "<img src='images/weather.png' class='card-img-top' alt='picture of weather app'>" +
            "<div class='card-body text-center'>" +
            "<h5 class='card-title'>Weather App</h5>" +
            "<a target='_blank' href='https://github.com/NAvena9/06-Weather-Dashboard' class='btn btn-info port-btn'>Repo</a>" +
            "<a target='_blank' href='https://navena9.github.io/06-Weather-Dashboard/' class='btn btn-primary port-btn'>Demo</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='col-sm-4 card-style' id='item2'>" +
            "<div class='card'>" +
            "<img src='images/pass_generator.png' class='card-img-top' alt='picture of Password Generator'>" +
            "<div class='card-body text-center'>" +
            "<h5 class='card-title'>Password Generator</h5>" +
            "<a target='_blank' href='https://github.com/NAvena9/03-Password-Generator' class='btn btn-info port-btn'>Repo</a>" +
            "<a target='_blank' href='https://navena9.github.io/03-Password-Generator/' class='btn btn-primary port-btn'>Demo</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "<div class='col-sm-4 card-style d-flex align-items-stretch' id='item3'>" +
            "<div class='card'>" +
            "<img src='images/school.png' class='card-img-top' alt='picture of School System Portal'>" +
            "<div class='card-body text-center'>" +
            "<h5 class='card-title'>School System Portal</h5>" +
            "<a target='_blank' href='https://github.com/izaack89/school-system' class='btn btn-info port-btn'>Repo</a>" +
            "<a target='_blank' href='https://infinite-chamber-84516.herokuapp.com/' class='btn btn-primary port-btn'>Demo</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        ).fadeIn(400);
    }


    $(".nav-work").on("click", function () {
        $(".about-page").hide();
        $(".header").hide();
        populatePortfolio();
    })

    $(".nav-about").on("click", function () {
        $(".header").hide();
        populateAbout();
    })

    $(".nav-home").on("click", function () {
        $(".about-page").hide();
        $(".header").hide();
        $(".portfolio-page").hide();
        populateMain();
    })

    $(".nav-doc").on("click", function () {
        $(".about-page").hide();
        $(".header").hide();
        $(".portfolio-page").hide();
        // populateDocumentation();
    })



    $(document).on("click", ".about", function () {
        $(".navbar").removeClass("hide").hide().fadeIn(1000);
        populateAbout();
    })

    $(document).on("click", ".portfolio", function () {
        $(".navbar").removeClass("hide").hide().fadeIn(1000);
        populatePortfolio();
    })

    // $(document).on("click", ".docs", function () {
    //     $(".navbar").removeClass("hide").hide().fadeIn(1000);
    //     populateDocumentation();
    // })



});