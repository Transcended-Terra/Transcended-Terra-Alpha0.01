#pragma strict


function OnCollisionStay (Col : Collision) {
if (Col.gameObject.name == "AsceProjectileSkill(Clone)")
{
Destroy (Col.gameObject);
Destroy(gameObject);
}
}