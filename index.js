/* everything is either wrapped up in the init function or the variable object (vObj), to avoid use of globals */

var vObj = {
    /* properties up top, methods next */
    ani: 0,
    bar: undefined,
    conCl: undefined,
    lines: undefined,
    numArr: [],
    numCount: 0,
    nums: undefined,
    title: undefined,
  
    // Modify the call method
    call: function() {
        if (this.numCount === 10) {
            var dialedNumber = this.numArr.join('');
            if (dialedNumber === '1234567890') {
                this.triggerConfetti();
            }
            // ... rest of your existing call method ...
        }
    },

    // Add triggerConfetti method
    triggerConfetti: function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    },
    /* clears numbers and variables to start over again */
    clearFun: function() {
      this.numArr = [];
      this.link.setAttribute('href','#');
      this.numCount = 0;
      this.title.innerHTML = "";
      this.title.innerHTML = "Click<br>Calls";
      for(i=0;i<this.nums.length;i++) {
        this.nums[i];
        this.nums[i].classList.add('disNon');
        this.nums[i].classList.remove('rAFade');
        this.nums[i].innerHTML = "";
      }
    },
    /* a simple function/method I created to 'prune' a class from an element's classList, I use a version of this often when coding front-end web apps, and you are welcome to use it too as long as you don't claim it's your own code :)  */
    prune: function(list, tExp) {
      for(p=0;p<list.length;p++) {
          if (tExp.test(list[p])) {
            list.remove(list[p]);
            p--;
          }
      }
    },
  
    numClick: function(num,deg) {
      /* this.ani keeps next animation from firing, while first is still going*/
      if (!this.ani && this.numCount<10) {
        /* array is used to change 'href' value of phone link later*/
        this.numArr.push(num);
        console.log(this.numArr);
        this.ani = 1;
        /* used to calculate milliseconds of Timeout functions below */
        var whole = num * 200 + 500;
        var half = whole/2;
        /* adds correct rotate class to #con1 */
        this.conCl.add('r' + deg);
        /* Timeout to add 'rotBar' animation halfway through */
        setTimeout(function(){
          vObj.bar.add('rotBar');
        },half);
        /* Timeout to remove animations classes, so they can be added again, and resets this.ani to 0 */
        setTimeout(function(){
          vObj.bar.remove('rotBar');
          vObj.prune(vObj.conCl,/^r/);
          vObj.ani = 0;
        },whole);
        this.numCount++;
        /* makes blue bars show up */
        if (this.numCount==1) {
          for(i=0;i<this.lines.length;i++) {
            this.lines[i].classList.remove('disNon');
          }
        }
        /* code for when you reach 10 numbers total */
        if (this.numCount==10) {
          this.nums[9].classList.remove('rAFade');
          this.title.innerHTML = "";
          this.title.innerHTML = "Click<br> to Call";
          if (num==10) {
            this.nums[9].innerHTML = "0";
          } else  {
            this.nums[9].innerHTML = num;
          }
        /* code for when you are at less than 10 numbers */
        } else {
          this.nums[this.numCount-1].classList.remove('disNon', 'rAFade');
          if (num==10) {
            this.nums[this.numCount-1].innerHTML = "0";
          } else  {
            this.nums[this.numCount-1].innerHTML = num;
          }
          this.nums[this.numCount].classList.remove('disNon');
          this.nums[this.numCount].classList.add('rAFade');
        }
  
  
      }
  
  
  
    }
  }
  
  
  function init() {
  /* grabbing all necessary elements after page loads */
   vObj.title = document.getElementById('title');
   vObj.conCl = document.getElementById('con1').classList;
   vObj.bar = document.getElementById('bar').classList;
   vObj.nums = document.getElementsByClassName('btnNum2');
   vObj.lines = document.getElementsByClassName('btLine');
   vObj.link = document.getElementById('phoneLink');
  }
  
  window.onload = init;
  