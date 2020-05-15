$.ajax({
	url: 'https://randomuser.me/api/',
	data:{results: 100},
	dataType: 'json',
	success: function(data) {
  //     console.log(typeof(data));
  //     console.log(data);
	  
	  var result = data.results;
	//   console.log(result);
	  $.each(result, function(index, user){
		var name = user.name.title+' '+user.name.first+' '+user.name.last;
		var age = user.dob.age;
		var phone = user.phone;
		var email = user.email;
		
		
		var tr = $('.template').find('tr').clone();
		tr.find('th').text(index+1);
		tr.find('.name').text(name);
		tr.find('.age').text(age);
		tr.find('.phone').text(phone);
		tr.find('.email').text(email);
		$('.table').find('tbody').append(tr);
	  });
	  
	}
  });