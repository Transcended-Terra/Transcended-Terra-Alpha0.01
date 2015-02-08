		#pragma strict
		
function Update(){	
			
					//Animation
			
			if(Input.GetKeyDown("w")){
			animation.Play("Walk_001");
			}
			else if(Input.GetKeyUp("w")){
			animation.Play("idle");
			}

			
			
			if (Input.GetKeyDown("s")){
			animation.Play("Backwards");
			}
			else if(Input.GetKeyUp("s")){
			animation.Stop();
			animation.Play("idle");
			}
		}