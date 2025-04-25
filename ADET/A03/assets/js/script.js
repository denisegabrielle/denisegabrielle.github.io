var skill = ["Computer Skills", "Leadership Skills", "Kitchen Management Skills", "Knife Skills", "Food Preparation Skills", "Proficient in Espresso Extraction Techniques"];
var skillPics = ["assets/img/cs.png", "assets/img/ls.png", "assets/img/ks.png", "assets/img/kns.png", "assets/img/fs.png", "assets/img/bs.png"];

for (var i = 0; i < skill.length; i++) {
    var myContainer = document.getElementById("cardContainerSkills");
    myContainer.innerHTML +=
        `<div class="col-4 col-sm-4 col-md-4 col-lg-2 flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-content">
                            <div class="flip-card-front">
                                <img src="${skillPics[i]}" alt="Skill"/>
                            </div>
                            <div class="flip-card-back">
                                <p>${skill[i]}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
}