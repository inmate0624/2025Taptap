using UnityEngine;

namespace Base
{
    /// <summary>
    /// 单例基类
    /// </summary>
    /// <remarks>继承此类，即可实现单例模式</remarks>
    /// <typeparam name="T"></typeparam>
    public class SingletonBase<T> : MonoBehaviour where T:SingletonBase<T>
    {
        static public T instance;

        public virtual void Awake()
        {
            if (instance != null)
            {
                Destroy(gameObject);
                return;
            }

            instance = this as T;
        
            //确保跨场景时仍然是单例类
            DontDestroyOnLoad(gameObject);
        }

        public void OnDestroy()
        {
            instance = null;
        }
    }
}
