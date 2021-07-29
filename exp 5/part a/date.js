var date = new Date();

            var hours = date.getHours()%12;
            var mins = date.getMinutes();
            var suffix = date.getHours()<12?"AM":"PM";
            var current_date = date.toDateString().substr(4);
            // var month = date.getMonth();
            

            var currentDay; 
            switch(date.getDay()){
                case 1: currentDay = "Monday"
                    break;
                case 2: currentDay = "Tuesday"
                break;
                case 3: currentDay = "Wednesday"
                break;
                case 4: currentDay = "Thursday"
                break;
                case 5: currentDay = "Friday"
                break;
                case 6: currentDay = "Saturday"
                break;
                case 0: currentDay = "Sunday"
                break;
            }
            
            
            
            
            document.getElementById("hour").innerHTML = hours<10?"0"+hours:hours;
            document.getElementById("min").innerHTML = mins;
            document.getElementById("suffix").innerHTML = suffix;
            document.getElementById("Date").innerHTML = current_date; 
            document.getElementById("Day").innerHTML = currentDay; 
            