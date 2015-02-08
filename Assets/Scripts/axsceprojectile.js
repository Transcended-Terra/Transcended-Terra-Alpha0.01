#pragma strict

var AxsceProjectileFire : Transform;
var AxsceProjectilePins : Transform;

function Update () {
if (Input.GetKeyDown("1"))
{
var AxsceProjectile = Instantiate 
 (AxsceProjectileFire,gameObject.Find("AxsceProjectileSpawn").transform.position, 
 Quaternion.identity);
AxsceProjectile.rigidbody.AddForce(transform.forward*10000);
}
if (Input.GetKeyDown("2"))
{
var AxsceProjectilePinFire = Instantiate 
 (AxsceProjectilePins,gameObject.Find("AxsceProjectileSpawn").transform.position, 
 Quaternion.identity);
AxsceProjectilePinFire.rigidbody.AddForce(transform.forward*10000);
}

}