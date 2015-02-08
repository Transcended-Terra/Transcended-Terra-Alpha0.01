		#pragma strict
		
function Update(){	
			
					//Animation
			
			
			
			if(Input.GetKeyDown("w")||("a")||("d")){
			animation.Play("Walk_001");
			}
			else if(Input.GetKeyUp("w")||("a")||("d")){
			animation.Play("idle");
			}

			
			
			if (Input.GetKeyDown("s")){
			animation.Play("backwards");
			}
			else if(Input.GetKeyUp("s")){
			animation.Play("idle");
			}
		}