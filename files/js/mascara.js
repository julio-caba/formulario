$("input[name='masknumber']").on("input", function(){
    let n = destroyMask(this.value);
      this.setAttribute("data-normalized", n);
    this.value = createMask(n);
  })
  
  function createMask(string){
      return string.replace(/(\d{2})(\d{3})(\d{2})/,"$1$2$3");
  }
  
  function destroyMask(string){
      return string.replace(/\D/g,'').substring(0, 10);
  }