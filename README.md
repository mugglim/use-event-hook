# useEvent

`useEvent`를 연습해보기 위한 레포입니다.

`useEvent`는 react hooks 중 하나입니다. `useEvent`로 생성된 함수는 절대로 재생성되지 않고, 항상 동일한 참조값을 가집니다. `useCallback`과 유사하게 함수를 메모제이션 하는 도구라고 생각하시면 좋습니다.

> 주의, `useEvent`는 아직 정식 hook은 아닙니다. React RFC에 제안되고 있는 훅 중 하나입니다.

### Endpoints

- `/1-useState` : useState
- `/2-react-memo` : useState + React.memo
- `/3-use-callback` : useState + React.memo + useCallback
- `/4-use-event` : useState + React.memo + useEvent
