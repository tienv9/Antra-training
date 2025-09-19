// MVC pattern
// Model: handle the data
// View: User interface
// Controller:


const View = (() => {
    const dom = {
        container_available: document.querySelector("#course_container_available"),
        container_selected: document.querySelector("#course_container_selected"),
    }

    const createTempCourse = (dataList) => {
        let template = "";

        // if course is a requirement, use highlight class instead and change type to Compulsory
        dataList.forEach((course) => {
            if(course.required == true) {
                template +=`<li class="course highlight" data-id="${course.courseId}">${course.courseName} <br>Course Type : Compulsory <br>Course Credit : ${course.credit}`;
            } else {
                template +=`<li class="course" data-id="${course.courseId}">${course.courseName} <br>Course Type : Elective <br>Course Credit : ${course.credit}`;
            }
        });
        return template;
    }

    const render = (elem, template) => {
        elem.innerHTML = template;
    }

    return {
        dom,
        createTempCourse,
        render
    }

})();

const Model = ((view) => {

    // fetch from api 
    const fetchCourses = async () => {
        try {
            const res = await fetch("http://localhost:4232/courseList");
            return await res.json();
        } catch (err) {
            console.error("Error fetching courses:", err);
            return;
        }
    };

    return {
        fetchCourses
    };
})(View);

const Controller = ((model, view) => {
    const { dom, createTempCourse, render } = view;

    const calculateTotalCredits = () => {
        let selectedCredit = 0;
        //select all course class with selected toggled
        const selectedCourses = document.querySelectorAll(".course.selected");

        selectedCourses.forEach(course => {
            const creditText = course.innerHTML.split("Course Credit : ")[1];
            selectedCredit += parseInt(creditText);
        });
        return selectedCredit;
    };

    const updateFooter = () => {
        const totalCredits = calculateTotalCredits();
        const footer = document.querySelector("#current_credit");
        footer.innerHTML = `Total Credit: ${totalCredits} <button class="select-btn">Select</button>`;
    };

    const init = async () => {
        // get course list from API
        const courses = await model.fetchCourses();

        // render available courses
        render(dom.container_available, createTempCourse(courses));

        // select items on list with click 
        dom.container_available.addEventListener("click", (ck) => {
            const currentTarget = ck.target;
            const currentTargetCredit = parseInt(currentTarget.innerHTML.split("Course Credit : ")[1]);
            const totalCredits = calculateTotalCredits();

            // prevent selection if it exceeds 18 credits
            // also need to check selected since it would cause alert to deselect courses if add to 18
            if (!currentTarget.classList.contains("selected") && (totalCredits + currentTargetCredit) > 18) {
                alert("You have exceeded the maximum credit limit of 18. Please deselect some courses.");
                return;
            }

            // toggle selected if under 18 credits
            currentTarget.classList.toggle("selected");
            updateFooter();
        });

        // update footer
        updateFooter();
    };

    return { init };
})(Model, View);

Controller.init();