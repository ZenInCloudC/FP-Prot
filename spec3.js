describe('Enter login feature',function(){
    browser.waitForAngularEnabled(false);
    
    browser.driver.manage().window().maximize();
 
 
 
 it('It should name as freshpro',function(){
 
     browser.get('http://beta1.freshproposals.com/');
     browser.driver.findElement(by.name('textbox_0')).sendKeys('zenincloud@gmail.com');
     browser.driver.findElement(by.name('textbox_1')).sendKeys('ZenInCloud@123');
    var abc = browser.driver.findElement(by.xpath("//b[contains(text(),'Sign In')]"));
    abc .click();
    browser.sleep('15000');
 });
 
 });
 describe('Create Proposal', function() {
    it("proposal creation and sending the proposal",function(){
      browser.driver.findElement(by.xpath("//li[@class='proposals']")).click();
      browser.sleep('7000');
      browser.driver.findElement(by.className("create-prop-temp-box")).click();
      browser.sleep('3000');
      browser.driver.findElement(by.name('name')).sendKeys('Protractor-proposal');
      browser.sleep('5000');
      //dragandDrop();
      browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
      browser.sleep('7000');
      browser.driver.findElement(by.id("chkContact298")).click();
      browser.sleep('3000');
      browser.driver.findElement(by.xpath("//button[@class='btn btn-outline-secondary calendar']//img")).click();
      browser.sleep('3000');
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      today = yyyy +'-'+ mm +'-'+ dd;
      console.log(today);
      var pickerDue = element(by.xpath("//input[@name='dueDate']")).sendKeys(today);
      browser.sleep('4000');
  
  
  browser.sleep('4000');
  browser.driver.findElement(By.xpath("//button[@class='btn send-btn mt-3']")).click();
  browser.sleep('4000');
 // browser.findElement(by.xpath("//img[@src='../../assets/right-arrow-blue.svg']")).click();
  //browser.sleep('4000');
  dragAndDropFeesTable();
 
 //Add new section
 browser.findElement(by.xpath("//button[@class='btn add-sect-btn proposal-add-sec']//i[@class='fa fa-plus-circle']")).click();
 browser.driver.findElement(By.className("create-prop-temp-box")).click();
 browser.sleep('4000');
 browser.driver.findElement(by.xpath("//input[@formcontrolname='name']")).sendKeys("ADD SECTION");
 browser.sleep('5000')
 browser.driver.findElement(by.xpath("//button[@class='btn save-btn float-right']")).click();
 browser.sleep('2000')
 browser.findElement(by.xpath("//img[@class='img-fluid close-section-library']")).click();
 browser.sleep('3000');
 browser.findElement(by.xpath("//a[contains(text(),'ADD SECTION')]")).click();
 browser.sleep('3000');

 // dragAndDropFeesTable();
 
  
  
  
  
  browser.sleep('4000')
  
    });
    
  });
  function dragAndDropFeesTable(){
    var abc= browser.findElement(by.xpath("//img[@src='../../assets/navbar-hide-arrow-icon.png']"));
    browser.executeScript("arguments[0].click()",abc);
     browser.sleep('5000');   
     var e1 = element(by.id('Fees'));
    
      browser.sleep('1000');
           browser.findElement(by.xpath("//option[9]")).click();
           browser.sleep('5000');
             const JS_HTML5_DND = 'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';
    var e2= element.all(by.xpath("//div[@class='default-rectangle']")).last();
            browser.driver.executeScript(JS_HTML5_DND, e1.getWebElement(), e2.getWebElement());

            browser.sleep('3000');
            browser.driver.findElement(by.xpath("//option[contains(text(),'100%')]")).click();
            browser.sleep('4000');

  };