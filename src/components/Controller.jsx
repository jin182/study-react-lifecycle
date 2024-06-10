import useUpdate from '../hooks/useUpdate';

export default function Controller({ onClickButton }) {
    useUpdate(() => {
        console.log('CONTROLLER 컨포런트 업데이트');
    });
    return (
        <div>
            <button
                onClick={(e) => {
                    onClickButton(-1);
                }}
            >
                -1
            </button>
            <button
                onClick={(e) => {
                    onClickButton(-10);
                }}
            >
                -10
            </button>
            <button
                onClick={(e) => {
                    onClickButton(-100);
                }}
            >
                -100
            </button>
            <button
                onClick={(e) => {
                    onClickButton(100);
                }}
            >
                +100
            </button>
            <button
                onClick={(e) => {
                    onClickButton(10);
                }}
            >
                {' '}
                +10
            </button>
            <button
                onClick={(e) => {
                    onClickButton(1);
                }}
            >
                +1
            </button>
        </div>
    );
}
