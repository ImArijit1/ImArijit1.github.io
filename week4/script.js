var names=new Array();
names[0]="Arijit";
names[1]="Aditya";
names[2]="Jenifar";
names[3]="jorden";
names[4]="jeet";
names[5]="zoro";
names[6]="lufi";
names[7]="sanji";
names[8]="brook";
names[9]="Law";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}