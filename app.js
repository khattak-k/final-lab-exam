



    this.Add = function(){
            var team1 = document.getElementById('team1').value;
            var team2 = document.getElementById('team2').value;
            var city = document.getElementById('city').value;
            var date = document.getElementById('date').value;

            var macthesInfo = document.getElementById("macthesInfo");

            newmatch = team1+'vs'+team2+city+date;
            var matchtext = document.createTextNode(newmatch);

            var Newlist = document.createElement('li')
            Newlist.appendChild(matchtext);
            macthesInfo.appendChild(Newlist);


            
    };

    this.Delete = function(item){

    };

    this.Count = function(data){

    };

