import { useState } from 'react';
import { IcoEyeClose, IcoEyeOpen, IcoMail, IcoPass } from '../components/icons';

export default function LoginInput({
  id,
  type,
  placeholder,
  value,
  ico,
  isDisabled,
  onChange,
  isRequired,
}) {
  const [viewPass, setViewPass] = useState(false);
  const toggleView = () => setViewPass(!viewPass);
  const classIco = 'w-4.5 h-4.5 text-white fill-current';

<<<<<<< HEAD
export default function LoginInput({id, type, placeholder, value, ico, isDisabled, onChange, isRequired}) {
  
  let classIco = "w-4.5 h-4.5 text-white fill-current"
          
=======
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
  return (
    <div className="relative my-2.5">
      {type !== 'password' ? (
        <div className="flex absolute top-2 right-1 items-center justify-center w-7 h-7 rounded-full bg-b-300">
          {
<<<<<<< HEAD
              {
                'mail': <IcoMail className={classIco} />,
                'pass': <IcoPass className={classIco} />,
              } [ico]
            }

      </div>

      <input className="relative w-full no-sel-input bg-transparent rounded-none text-white border-0 border-b border-b-300 pt-2 pr-10 pb-3 pl-1.5 placeholder-b-300" 
        type={type} placeholder={placeholder} value={value} disabled={isDisabled} onChange={e => onChange(e.target.value)} required={isRequired} />
=======
            {
              mail: <IcoMail className={classIco} />,
              pass: <IcoPass className={classIco} />,
            }[ico]
          }
        </div>
      ) : (
        <div className="flex absolute top-2 right-1 items-center justify-center w-7 h-7 rounded-full bg-b-300">
          {viewPass ? (
            <a className="cursor-pointer" onClick={toggleView}>
              <IcoEyeOpen className="w-6 h-6 text-white fill-current" />
            </a>
          ) : (
            <a className="cursor-pointer" onClick={toggleView}>
              <IcoEyeClose className="w-6 h-6 text-white fill-current" />
            </a>
          )}
        </div>
      )}
      <input
        className="w-full no-sel-input bg-transparent text-white border-0 border-b border-b-300 pr-10 py-2.5 pl-2 placeholder-b-300"
        type={type === 'password' && viewPass ? 'text' : type}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={e => onChange(e.target.value)}
        required={isRequired}
      />
>>>>>>> 40126e79bbefcdeb149e259551a9c3e9cd571710
    </div>
  );
}
