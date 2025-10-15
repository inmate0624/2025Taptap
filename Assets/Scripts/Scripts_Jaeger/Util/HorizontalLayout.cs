using UnityEngine;

public class HorizontalLayout : MonoBehaviour{
    public float spacing = 1.5f;
    public bool dirty = false;
    
    private int _childCount = 0;

    void Update(){
        int childCount = transform.childCount;
        if (childCount != _childCount){
            _childCount = childCount;
            dirty = true;
        }

        Layout();
    }
    // 将子节点排列成水平布局
    public void Layout(){
        if (dirty){
            for (int i = 0; i < transform.childCount; i++){
                transform.GetChild(i).localPosition = new Vector3(i * spacing, 0, 0);
            }
            dirty = false;
        }
    }


}