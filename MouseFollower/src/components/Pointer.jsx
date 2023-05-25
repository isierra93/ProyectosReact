export const Pointer = ({X, Y}) => {
    return(
        <div 
        style=
          {{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${X}px, ${Y}px)`
          }}
      >
      </div>
    )
};