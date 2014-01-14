<script type="text/javascript">
	debugger;
	/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'zhoufan'; // required: replace example with your forum shortname
    $('#disqus_container .comment').on('click',function(){
    	debugger;
    	var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
       	$(this).remove();

    });      
</script>