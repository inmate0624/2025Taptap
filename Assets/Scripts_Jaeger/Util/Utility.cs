
using UnityEngine;

public static class Utility
{
    public static Vector3 GetMousePosition()
    {
        var mousePosition = Input.mousePosition;
        mousePosition.z = - Camera.main.transform.position.z;
        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(mousePosition);
        return worldPosition;
    }
}