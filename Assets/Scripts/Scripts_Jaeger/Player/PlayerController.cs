using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] PlayerMovement _playerMovement;
    void Awake()
    {
        _playerMovement = GetComponent<PlayerMovement>() ?? gameObject.AddComponent<PlayerMovement>();
    }
}
