#   M y - c o m p o n e n t - l i b r a r y 
 
 
 
 # #   H o w   t o   r u n   c o m p o n e n t   l i b r a r y   b u i l d   w i t h   S t o r y b o o k   i n   a   D o c k e r   c o n t a i n e r 
 
 
 
 # # #   P r e r e q u i s i t e s 
 
 -   M a k e   s u r e   y o u   h a v e   D o c k e r   i n s t a l l e d   o n   y o u r   s y s t e m . 
 
 -   C l o n e   t h i s   r e p o s i t o r y   t o   y o u r   l o c a l   m a c h i n e . 
 
 
 
 # # #   B u i l d   a n d   R u n 
 
 1 .   N a v i g a t e   t o   t h e   r o o t   d i r e c t o r y   o f   t h e   p r o j e c t . 
 
 
 
 2 .   B u i l d   t h e   D o c k e r   i m a g e   u s i n g   t h e   f o l l o w i n g   c o m m a n d : 
 
 -   d o c k e r   b u i l d   - t   l a s t N a m e * f i r s t N a m e * c o d i n g * a s s i g n m e n t 1 2   . 
 
 
 
 3 .   O n c e   t h e   b u i l d   i s   c o m p l e t e ,   r u n   t h e   D o c k e r   c o n t a i n e r   w i t h   t h e   f o l l o w i n g   c o m m a n d : 
 
 -   d o c k e r   r u n   - p   8 0 8 3 : 8 0   l a s t N a m e * f i r s t N a m e * c o d i n g * a s s i g n m e n t 1 2 
 
 
 
 4 .   F r o m   y o u r   D o c k e r   D e s k t o p ,   s t a r t   y o u r   n e w l y   b u i l t   c o n t a i n e r   a n d   t r y   t o   r u n   i t . 
 
 
 
 # # #   A c c e s s 
 
 T h i s   s e t u p   w i l l   h o s t   y o u r   R e a c t   c o m p o n e n t   l i b r a r y   b u i l t   w i t h   S t o r y b o o k   i n s i d e   a   D o c k e r   c o n t a i n e r   a n d   m a k e   i t   a c c e s s i b l e   a t   [ h t t p : / / l o c a l h o s t : 8 0 8 3 ] ( h t t p : / / l o c a l h o s t : 8 0 8 3 )   o n   y o u r   l o c a l   m a c h i n e . 
 
 
 
 # #   S t e p s   t o   c r e a t e   a   c o m p o n e n t   l i b r a r y 
 
 
 
 # # # #   1 .   I n i t i a l i z e   y o u r   p r o j e c t 
 
 n p m   i n i t 
 
 
 
 # # # #   2 .   I n s t a l l   n e c e s s a r y   p a c k a g e s 
 
 n p m   i n s t a l l   r e a c t   t y p e s c r i p t   @ t y p e s / r e a c t   - - s a v e - d e v 
 
 
 
 # # # #   3 .   C r e a t e   c o m p o n e n t s 
 
 ~ E a c h   c o m p o n e n t   s h o u l d   c o n t a i n   t h e   f o l l o w i n g   f i l e s : 
 
 -   C o m p o n e n t * n a m e . s t o r i e s . t s x 
 
 -   C o m p o n e n t * n a m e . t y p e s . t s x 
 
 -   C o m p o n e n t * n a m e * t e s t . t s x 
 
 -   C o m p o n e n t _ n a m e . t s x 
 
 -   i n d e x . t s x 
 
 
 
 # # # #   4 .   A d d   R o l l u p   f o r   y o u r   p r o j e c t 
 
 -   n p m   i n s t a l l   r o l l u p   @ r o l l u p / p l u g i n - n o d e - r e s o l v e   @ r o l l u p / p l u g i n - t y p e s c r i p t   @ r o l l u p / p l u g i n - c o m m o n j s   r o l l u p - p l u g i n - d t s   - - s a v e - d e v 
 
 -   n p m   r u n   r o l l u p 
 
 
 
 # # # #   5 .   A d d   t e s t s   f o r   y o u r   c o m p o n e n t s 
 
 -   n p m   i n s t a l l   @ t e s t i n g - l i b r a r y / r e a c t   j e s t   @ t y p e s / j e s t   - - s a v e - d e v 
 
 -   n p m   i n s t a l l   @ b a b e l / c o r e   @ b a b e l / p r e s e t - e n v   @ b a b e l / p r e s e t - r e a c t   @ b a b e l / p r e s e t - t y p e s c r i p t   b a b e l - j e s t   - - s a v e - d e v 
 
 -   n p m   i n s t a l l   i d e n t i t y - o b j - p r o x y   - - s a v e - d e v 
 
 
 
 # # # #   T h e n ,   r u n   t e s t s : 
 
 n p m   r u n   t e s t 
 
 
 
 # # # #   6 .   I n i t i a l i z e   S t o r y b o o k   i n   y o u r   p r o j e c t 
 
 n p x   s b   i n i t   - - b u i l d e r   w e b p a c k 5 
 
 
 
 # # # #   7 .   R u n   S t o r y b o o k 
 
 n p m   r u n   s t o r y b o o k 
 
 
 
 # #   C r e a t i n g   a   G i t H u b   r e p o s i t o r y 
 
 F o l l o w   t h e   s t e p s   t o   c r e a t e   a   G i t H u b   r e p o s i t o r y   f o r   y o u r   p r o j e c t . 
 
 
 
 # #   R e f e r e n c e s 
 
 T u t o r i a l   o n   c r e a t i n g   a n d   p u b l i s h i n g   a   R e a c t   c o m p o n e n t   l i b r a r y   ( h t t p s : / / d e v . t o / a l e x e a g l e s o n / h o w - t o - c r e a t e - a n d - p u b l i s h - a - r e a c t - c o m p o n e n t - l i b r a r y - 2 o e ) 
 
 
