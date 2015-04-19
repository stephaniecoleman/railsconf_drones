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
    this.animate('doublePhiThetaMixed', 4000);
  });
  client.after(4000, function(){
    this.stop();
  });
  client.after(2000, function(){
    this.animate('yawDance', 4000);
  });
  client.after(4000, function(){
    this.stop();
  });
  client.after(2000, function(){
    this.animate('doublePhiThetaMixed', 4000);
  });
  client.after(4000, function(){
    this.stop();
  });
};

function groove(){
	client.after(4000, function(){
		this.left(0.1);
	});
	client.after(2000, function(){
		this.stop();
	});
	client.after(1000, function(){
		this.right(0.1);
	});
	client.after(2000, function(){
		this.stop();
	});
	client.after(1000, function(){
		this.left(0.1);
	});
	client.after(2000, function(){
		this.stop();
	});
	client.after(1000, function(){
		this.right(0.1);
	});
	client.after(2000, function(){
		this.stop();
	});
}

function wait(){
  client.after(4000, function(){
    this.stop();
  });
}

function cha_cha(){
  client.after(4000, function(){
    this.animate('thetaDance', 4000);
  });
  client.after(4000, function(){
    this.stop();
  });
  client.after(2000, function(){
    this.animate('phiDance', 4000);
  });
  client.after(4000, function(){
    this.stop();
  });
}

function twirly_twist(){
  client.after(4000, function(){
    this.animate('turnaround', 4000);
   });
  client.after(4000, function(){
    this.stop();
  });
  client.after(2000, function(){
    this.animate('wave', 4000);
  });
  client.after(4000, function(){
    this.stop();
  });
  client.after(2000, function(){
    this.animate('turnaround', 4000);
  }); 
  client.after(4000, function(){
    this.stop();
  });
}

function updown(){
  client.after(4000, function(){
  	this.up(1);
  });
  client.after(1000, function(){
  	this.stop();
  });
  client.after(1000, function(){
  	this.down(1);
  });
  client.after(1000, function(){
  	this.stop();
  });
  client.after(2000, function(){
    this.up(1);
  });
  client.after(1000, function(){
    this.stop();
  });
  client.after(1000, function(){
    this.down(1);
  });
  client.after(1000, function(){
    this.stop();
  });
};

function land(){
  client.after(4000, function(){
  	this.land();
  }); 
};

var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();
wait();
cha_cha();
updown();
twirly_twist();
whatever();
// upsidedown();
groove();
// cha_cha();
// updown();
// twirly_twist();
// whatever();
// upsidedown();
// groove();
// wait();
land();