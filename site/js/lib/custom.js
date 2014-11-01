<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>          
<script type="text/javascript">
var $ActionType = $('#ActionType'), $InputMessage = $('#InputMessage');
$ActionType.change(function () {
	
    if ($ActionType.val() == 'Call') {
        $InputMessage.hide();
    } else {
        $InputMessage.show();
    }
});
</script>





