using UnityEngine;

public interface IPlayerMovement{
    void Move(Vector2 direction, float speed);
}

public class PlayerMovement : MonoBehaviour, IPlayerMovement{
    [SerializeField] private float _speed = 5f;
    private Rigidbody2D _rigidbody2D;
    void Awake()
    {
        _rigidbody2D = GetComponent<Rigidbody2D>();
    }
    void Update()
    {
        Move(new Vector2(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical")), _speed);
    }
    public void Move(Vector2 direction, float speed)
    {
        _rigidbody2D.linearVelocity = direction * speed;
    }
}