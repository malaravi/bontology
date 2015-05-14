function updateData() {
	var stats = JSON.parse(stats45319);
	document.getElementById("sales").innerHTML = stats[0].DealValue;
	document.getElementById("dealcount").innerHTML = stats[0].DealCount;
	document.getElementById("referrals").innerHTML = stats[0].ReferralCount;
	var top = JSON.parse(topclients);
	var sum = 0;
	var percent = [];
	for (q=0; q<5; q++) {
		sum += Number(top[q].DealValue);
	}
	for (w = 0; w < 5; w++) {
		percent[w] = Number(top[w].DealValue) / sum;
	}
	for (i = 0; i < 5; i++) {
		var t = top[i];
		var tr = document.createElement("tr");
		var tds = [];
		for (j = 0; j < 4; j++) {
			tds[j] = document.createElement("td");
			tr.appendChild(tds[j]);
		}
		tds[0].appendChild(document.createTextNode(t.CompanyName));
		tds[2].appendChild(document.createTextNode(t.DealValue));
		tds[1].appendChild(document.createTextNode(t.PhoneNumber));
		var pbar1 = document.createElement("div");
		var att1 = document.createAttribute("class");
		att1.value = "progress progress-striped active";
		pbar1.setAttributeNode(att1);
		tds[3].appendChild(pbar1);
		var pbar2 = document.createElement("div");
		var atts = [];
		var attnames = ["class", "role", "aria-valuemin", "aria-valuemax", "style"];
		for (k = 0; k <5; k++) {
			atts[k] = document.createAttribute(attnames[k]);
		}
		atts[0].value = "progress-bar";
		atts[1].value = "progressbar";
		atts[2].value = "0";
		atts[3].value = "100";
		atts[4].value = "width:" + percent[i] * 100 + "%";
		for (x = 0; x<5; x++) {
			pbar2.setAttributeNode(atts[x]);
		}
		pbar1.appendChild(pbar2);
		document.getElementById("tablebody").appendChild(tr);

	};
	var country = JSON.parse(bycountry);
	var person = JSON.parse(byperson);
	var office = JSON.parse(byoffice);
	var persontd =[];
	// for(c = 0; c<person.length; c++) {
	// 	persontd[c] = document.createElement("div");
	// 	document.getElementById("ppbarchart").appendChild(persontd[c]);
	// 	var baratt = document.createAttribute("class");
	// 	baratt.value = "bar";
	// 	persontd[c].setAttributeNode(baratt);
	// 	var inner = document.createElement("div");
	// 	persontd[c].appendChild(inner);
	// 	var baratts = [];
	// 	var barattnames = ["class", "data-original-title", "data-toggle", "data-placement"];
	// 	for (cc = 0; cc<4; cc++) {
	// 		baratts[cc] = document.createAttribute(barattnames[cc]);
	// 	}
	// 	baratts[0].value = "value tooltips";
	// 	baratts[1].value = person[c].dealvalue;
	// 	baratts[2].value = "tooltip";
	// 	baratts[3].value = "top";
	// 	for (ccc = 0 ; ccc < 4; ccc++) {
	// 		inner.setAttributeNode(baratts[ccc]);
	// 	}
	// 	inner.appendChild(document.createTextNode(Number(person[c].dealvalue)/3000+"%"));
	// 	var inner2 = document.createElement("div");
	// 	var baratt2 = document.createAttribute("class");
	// 	baratt2.value = "title";
	// 	inner2.setAttributeNode(baratt2);
	// 	inner2.appendChild(document.createTextNode(person[c].associateid));
	// 	persontd[c].appendChild(inner2);


	// }
}




