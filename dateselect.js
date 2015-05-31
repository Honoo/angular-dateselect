angular.module('ngDateSelect',[])
.directive('dateSelect',function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'dateselect.html',
		scope: { 
			setFn: '&'
		},
		link: function(scope,element,attrs){
			var months = [
							{id:1, name:'January'},
							{id:2, name:'February'},
							{id:3, name:'March'},
							{id:4, name:'April'},
							{id:5, name:'May'},
							{id:6, name:'June'},
							{id:7, name:'July'},
							{id:8, name:'August'},
							{id:9, name:'September'},
							{id:10, name:'October'},
							{id:11, name:'November'},
							{id:12, name:'December'}
						];

			var daySelect = element.find("#day");
			for(var i = 1; i < 32; i++){
				daySelect.append('<option value="'+i+'">'+i+'</option>');
			}

			var monthSelect = element.find("#month");
			$.each(months, function(index,value){
				monthSelect.append('<option value="'+value.id+'">'+value.name+'</option>');
			});

			var yearSelect = element.find("#year");
			var date = new Date();
			var year = date.getFullYear();
			var minYear, maxYear;

			if(!element.attr("min-year")){
				minYear = year;
			}
			else {
				minYear = element.attr("min-year");
			}

			if(!element.attr("max-year")){
				if(year >= minYear){
					maxYear = year;
				}
				else  {
					maxYear = minYear+1;
				}
			}
			else {
				maxYear = element.attr("max-year");
			}

			for(var i = minYear; i <= maxYear; i++){
				yearSelect.append('<option value="'+i+'">'+i+'</option>');
			}

			// Change the total number of days depending on month/year
			var changeDays = function(end){
				var lastDay = daySelect.children().last().val();
				var selectedDay = daySelect.val();

				if(lastDay != end.toString()){
					daySelect.empty();

					for(var i = 1; i <= end; i++){
						daySelect.append('<option value="'+i+'">'+i+'</option>');
					}
				}

				if(selectedDay < end){
					daySelect.children("[selected='selected']").removeAttr("selected");
					daySelect.children("[value='"+selectedDay+"']").attr("selected","selected");
				}
			}

			monthSelect.change(function(){
				switch(monthSelect.val()){
					case '1':
					case '3':
					case '5':
					case '7':
					case '8':
					case '10':
					case '12':
						changeDays(31);
						break;

					case '4':
					case '6':
					case '9':
					case '11':
						changeDays(30);
						break;

					case '2':
						if(yearSelect.val() % 4 == 0){
							changeDays(29);
						}
						else {
							changeDays(28);
						}
						break;
					default:
						break;	
				}
			});

			yearSelect.change(function(){
				if(yearSelect.val() % 4 == 0){
					changeDays(29);
				}
				else {
					changeDays(28);
				}
			});

			scope.getDate = function(){
				var day = daySelect.val().toString();
				var month = monthSelect.val().toString();
				var year = yearSelect.val().toString();

				if(day.length == 1){
					day = '0'+day;
				}
				if(month.length == 1){
					month = '0'+month;
				}

				var date = day+'/'+month+'/'+year;
				return date;
			}

			scope.setFn({
				dateGetFn: scope.getDate
			});
		}
	};
})