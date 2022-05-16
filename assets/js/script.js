 /*var pocetTabulek = 0;
        var selectedTable = -1;*/
        //var poleTipovanychCisel = new Array();
        function oznac(bunka) {
            /*document.getElementsByTagName("td")[cislo]
            document.querySelectorAll("td")*/
            /*if (bunka.style.backgroundColor != "yellow") {
                bunka.style.backgroundColor = "yellow";
            }
            else {
                bunka.style.backgroundColor = "white";
            }*/
            //původní kód:
            //var pocet = document.getElementsByClassName("tip").length;
            //if (bunka.className != "tip" && pocet < 6) {
            //    bunka.classList.add("tip");/*take lze className= a priradim tridu*/
            //}
            //else {
            //    bunka.classList.remove("tip");/*take lze className=""*/
            //}
            //let id = parseInt(bunka.parentNode.parentNode.parentNode.parentNode.id);/**/
            //let pocetTipuVTabulce = poleTipovanychCisel[id-1];/**/
            if (bunka.className != "tip" && /*pocetTipuVTabulce*/bunka.parentElement.parentElement.getElementsByClassName("tip").length < 6) {/**/
                bunka.classList.add("tip");/*take lze className= a priradim tridu*/
                //poleTipovanychCisel[id-1] += 1;/**/
                if (bunka.classList.contains("los")) {
                    bunka.classList.remove("los");
                }
            }
            else if (/*bunka.className == "tip"*/bunka.classList.contains("tip")) {
                bunka.classList.remove("tip");/*take lze className=""*/
                //poleTipovanychCisel[id-1] -= 1;/**/
                bunka.classList.remove("los");/**/
            }
        }
        var vylosovanaCisla = new Array();
        //vylosovanaCisla.
        function losuj() {/******************************************************VE FUNKCI LOSUJ ZAHRNUTA PŮVODNĚ FUNKCIONALITA FUNKCÍ ZOBRAZCISLA ZOBRAZVYLOSOVANACILSA A ZOBRAZSERAZENACISLA*/
            /*vylosovanaCisla.length=0*//*vynuluje pole ignorací prvků*/
            /*vylosovanaCisla=[]*/
            let nahodneCislo;
            /*for (let i = 0; i < 49 * pocetTabulek; i++) {*//********************/
            //document.getElementsByTagName("td")[i].classList.remove("los");
            /*if (document.getElementsByTagName("td")[i].classList.contains("spravne")) {
                document.getElementsByTagName("td")[i].classList.remove("spravne");
                document.getElementsByTagName("td")[i].classList.add("tip");
            }*/
            /*}*//*****************************************/
            if (vylosovanaCisla.length != 0) { vymazCisla(); }/*není třeba danou fci používat, ale je to v zadání*/
            do {
                nahodneCislo = Math.floor(Math.random() * 49 + 1);
                if (vylosovanaCisla.indexOf(nahodneCislo) == -1) {
                    //if (!vylosovanaCisla.contains(nahodneCislo)) {
                    vylosovanaCisla.push(nahodneCislo);
                }
            } while (vylosovanaCisla.length < 6);
            //for (let i = 0; i < 6; i++) {
            //    document.querySelectorAll("#vylosovano td")[i].innerHTML = vylosovanaCisla[i];
            //}
            zobrazVylosovanaCisla();//upgrade podle zadání
            //vylosovanaCisla.sort(/*function(a, b){return a-b}*/(a, b) => a - b);/*řazení čísel*/
            //for (let i = 0; i < 6; i++) {
            //    document.querySelectorAll("#serazeno td")[i].innerHTML = vylosovanaCisla[i];
            //}
            zobrazSerazenaCisla();//upgrade podle zadání
            /*druhá verze*/
            /*for (let i = 0; i < 6; i++) {
                document.querySelectorAll("td")[vylosovanaCisla[i] - 1].classList.add("los");
            }*/
            //let pocet = document.querySelectorAll(".los").length; před zadáním vytvořeno ve škole
            /*for (let i = 0; i < pocet; i++) {//odebrání třídy los z předchozího losování
                document.querySelectorAll(".los")[i].classList.remove("los");
                pocet--;
                i--;
                console.log(pocet+" "+document.querySelectorAll(".los").length);
            }*/
            /*for (let i = pocet-1; i >= 0; i--) {
                document.querySelectorAll(".los")[i].classList.remove("los");
            }*/
            /*for (let i = 0; i < pocet; i++) { před zadáním vytvořeno ve škole
                document.querySelectorAll(".los")[0].classList.remove("los");//po odebrání nulté buňky bude další mít zase index 0
            }*/
            /*for (let i = 0; i < 49; i++) {
                if(document.querySelectorAll("td")[i].classList.contains("los")){
                    document.querySelectorAll("td")[i].classList.remove("los");
                }
            }*/
            /*/druhá verze*/
            zobrazCisla();//new
            zobrazVysledek();//new
        }/*každá tabulka by měla být v samostatném articlu a měl by nad ní být nadpis s číslem*/
        function zobrazVylosovanaCisla() {
            for (let i = 0; i < 6; i++) {
                document.querySelectorAll("#vylosovano td")[i].innerHTML = vylosovanaCisla[i];
            }
        }
        function zobrazSerazenaCisla() {
            vylosovanaCisla.sort(/*function(a, b){return a-b}*/(a, b) => a - b);/*řazení čísel*/
            for (let i = 0; i < 6; i++) {
                document.querySelectorAll("#serazeno td")[i].innerHTML = vylosovanaCisla[i];
            }
        }
        function vytvorTabulkuOld() {
            /*vloženo do table:  id=" + (pocetTabulek + 1) + " onmouseover='vyberTabulku(" + pocetTabulek + 1 + ")'*/
            let tabulka = "<table>";/**/
            for (let r = 0; r < 7; r++) {
                tabulka += "<tr>";
                for (let s = 1; s <= 7; s++) {
                    tabulka += "<td onclick='oznac(this)'>" + (r * 7 + s) + "</td>";
                }
                tabulka += "</tr>";
            }
            tabulka += "</table>";
            document.querySelector("section").innerHTML = "<article id='1'><h2>TABULKA 1</h2></article>";
            document.querySelector("article").innerHTML /**/ +=/**/ tabulka;/**/
            /*pocetTabulek++;*//**/
            //poleTipovanychCisel.push(0);/**/
        }
        /*function vyberTabulku(cislo) {
            selectedTable = cislo;
        }*///addEventListener ("click, function({oznacTip(this)})") a nakonec pokud je elementů více než 10, tak setVisibility hidden
        function /*pridej*/vytvorTabulku() {
            pocetArticle = document.querySelector("section"/*.tickety*/).childElementCount;//POZOR TATO VLASTNOST ZAPOČÍTÁVÁ VŠE VČETNĚ TAGŮ SCRIPT!
            let article = document.createElement("article");
            article.id = (pocetArticle + 1);
            let h2 = document.createElement("h2");
            h2.innerHTML = "TABULKA " + (pocetArticle + 1);
            article.appendChild(h2);
            let table = document.createElement("table");
            for (let r = 0; r < 7; r++) {
                let row = document.createElement("tr");
                for (let s = 1; s <= 7; s++) {
                    let cell = document.createElement("td");
                    cell.innerHTML = r * 7 + s;
                    cell.addEventListener("click", function () { oznac(this); });//lepší než onclick-přidáváme událost na kliknutí a obslužnou funkci
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            article.appendChild(table);
            document.querySelector("section").appendChild(article);
            if (pocetArticle == 4) {//možnost skrývat přebytečné tabulky
                //document.querySelector("button").style.visibility = "hidden";//-skrývám tlačítko pro spuštění funkce
                document.querySelector("button").style.display = "none";
            }
        }
        function vymazCisla() {
            vylosovanaCisla.splice(0, 6);
            let pocetLosovanych = document.querySelectorAll(".los").length;
            for (let i = 0; i < pocetLosovanych; i++) {
                document.querySelectorAll(".los")[0].classList.remove("los");
            }
            /*for (let i = 0; i < 6; i++) { není třeba resetovat, neboť buňky pokaždé přepisujeme
                document.querySelectorAll("#vylosovano td")[i].innerHTML = "";
                document.querySelectorAll("#serazeno td")[i].innerHTML = "";
            }*/
        }
        function zobrazCisla() {/****************************************************************ZAHRNUJE PŮVODNĚ FUNCKIONALITU ZOBRAZVYSLEDEK*******************************************************/
            //let pocetuhodnutych = 0;
            for (let i = 0; i < 6; i++) {/****************/
                for (let j = 0; j < document.getElementsByTagName("table").length - 2/*pocetTabulek*/; j++) {
                    //for (let k = 0; k < 49 + j * 49; k++) {
                    /*if (document.querySelectorAll("td")[vylosovanaCisla[i] - 1 + 49 * j].classList.contains("tip")) {
                        document.querySelectorAll("td")[vylosovanaCisla[i] - 1 + 49 * j].classList.add("spravne");
                    }
                    else {
                        document.querySelectorAll("td")[vylosovanaCisla[i] - 1 + 49 * j].classList.add("los");
                    }*/
                    document.querySelectorAll("td")[vylosovanaCisla[i] - 1 + 49 * j].classList.add("los");
                    //if (document.querySelectorAll("td")[vylosovanaCisla[i] - 1 + 49 * j].classList.contains("tip")) {
                    //    pocetuhodnutych++;
                    //}
                    // }
                }//buňka.parentElement.parentElement a z tabulky querySelector na tip abych věděl počet tipů a kontrolovat je takto; pro zobrazení červených čísel je pole tabulek a article má třídu stylů tickety a potom akorát dvojitým forem procházím buňky
            }/*************************///metody createElement a appendChild a childElementCount na počet
            //document.querySelector("#uhodnutaCisla").innerHTML = "Počet uhodnutých čísel: " + pocetuhodnutych;
        }
        function zobrazVysledek() {
            let poctyUhodnutych = new Array();
            //for (let i = 0; i < document.getElementsByTagName("table").length - 2/*pocetTabulek*/; i++) {/****************/
            //    let pocetUhodnutych = 0;
            //    for (let j = 0; j < 6; j++) {
            //        prvek = document.querySelectorAll("table")[i].querySelectorAll(".los")[j];
            //        if (prvek.classList.contains("tip")) {
            //            pocetUhodnutych++;
            //        }
            //    }
            //    poctyUhodnutych.push(pocetUhodnutych);
            //}
            for (let i = 0; i < document.querySelectorAll("table").length - 2; i++) {
                poctyUhodnutych.push(document.querySelectorAll("table")[i].querySelectorAll("td.tip.los").length);
            }
            document.querySelector("#uhodnutaCisla").innerHTML = "Nejvyšší počet uhodnutých čísel: " + Math.max(...poctyUhodnutych);
        }
