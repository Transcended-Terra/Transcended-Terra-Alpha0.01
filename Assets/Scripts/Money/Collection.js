#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (Col : Collider) {
PlayersMoney.Players_Money += 10;
Destroy(Col.gameObject);
print(PlayersMoney.Players_Money);

}