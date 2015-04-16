function upsidedown(){
  client.after(2000, function(){
    this.animate('yawDance', 1000);
  });
  client.after(3000, function(){
    this.animate('phiThetaMixed', 1000);
  });
  client.after(6000, function(){
    this.animate('doublePhiThetaMixed', 1000);
  });
}


function whatever(){
    client.after(4000, function(){
        this.animate('turnaround', 3000);
    });
    client.after(1000, function(){
        this.animate('wave', 4000);
    });
    client.after(1000, function(){
        this.animate('turnaround', 3000);
    });
    client.after(1000, function(){
        this.animate('doublePhiThetaMixed', 8000);
    });
};

function groove(){
	client.after(2000, function(){
		this.left(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});

	client.after(2000, function(){
		this.right(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});

	client.after(2000, function(){
		this.left(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});

	client.after(2000, function(){
		this.right(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});
}
function cha_cha(){
  client.after(10000, function(){
    this.animate('thetaDance', 4000);
  });
   client.after(2000, function(){
    this.stop();
  });
  client.after(3000, function(){
    this.animate('yawDance', 3000);
  }); 
}

function twirly_twist(){
    console.log("you are in here!!!");
    client.after(4000, function(){
        this.animate('turnaround', 2000);
        console.log('in the function');
     });
   console.log('after the function');
    
    client.after(3000, function(){
        this.animate('turnaround', 3000);
    });
    client.after(3000, function(){
        this.animate('yawDance', 3000);
    }); 
}

function grapevine(){

client.after(1000, function(){
	this.right(0.1);
});

client.after(1000, function(){

	this.stop();
});


client.after(1000, function(){

	this.left(0.1);
});

client.after(1000, function(){

	this.stop();
});


client.after(1000, function(){

	this.front(0.1);
});
client.after(1000, function(){

	this.stop();
});

client.after(1000, function(){
	this.back(0.1);
});
client.after(1000, function(){

	this.stop();
});

client.after(1000, function(){

	this.animate("wave", 4000);
});

};

function land(){
client.after(10000, function(){
  this.stop();
	this.land();
}); 
};



var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();


cha_cha();
grapevine();
twirly_twist();
whatever();
upsidedown();
groove();
cha_cha();
grapevine();
twirly_twist();
whatever();
upsidedown();
groove();
land();





