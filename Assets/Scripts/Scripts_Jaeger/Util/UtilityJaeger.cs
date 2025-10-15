
using UnityEngine;

public static class UtilityJaeger
{
    public static Vector3 GetMousePosition()
    {
        var mousePosition = Input.mousePosition;
        mousePosition.z = - Camera.main.transform.position.z;
        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(mousePosition);
        return worldPosition;
    }
}