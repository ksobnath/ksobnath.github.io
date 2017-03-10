
 $(document).ready(function() {
	$.ajax({
		url : "http://mubiz.com/@user_url/bitcoin/montant/référence/emetteur/",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.user_url);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
		}
	});
});
