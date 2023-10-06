PGDMP         4            	    {            catChat    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    17238    catChat    DATABASE        CREATE DATABASE "catChat" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "catChat";
                postgres    false            �            1259    17240    razas    TABLE        CREATE TABLE public.razas (
    idraza integer NOT NULL,
    nombreraza character varying(30),
    imagen character varying
);
    DROP TABLE public.razas;
       public         heap    postgres    false            �            1259    17239    razas_idraza_seq    SEQUENCE     �   CREATE SEQUENCE public.razas_idraza_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.razas_idraza_seq;
       public          postgres    false    215                       0    0    razas_idraza_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.razas_idraza_seq OWNED BY public.razas.idraza;
          public          postgres    false    214            �            1259    17247    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    idusuario integer NOT NULL,
    correo character varying,
    clave character varying,
    nomusuario character varying,
    idraza integer
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    17246    usuarios_idusuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_idusuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuarios_idusuario_seq;
       public          postgres    false    217                       0    0    usuarios_idusuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.usuarios_idusuario_seq OWNED BY public.usuarios.idusuario;
          public          postgres    false    216            j           2604    17243    razas idraza    DEFAULT     l   ALTER TABLE ONLY public.razas ALTER COLUMN idraza SET DEFAULT nextval('public.razas_idraza_seq'::regclass);
 ;   ALTER TABLE public.razas ALTER COLUMN idraza DROP DEFAULT;
       public          postgres    false    215    214    215            k           2604    17250    usuarios idusuario    DEFAULT     x   ALTER TABLE ONLY public.usuarios ALTER COLUMN idusuario SET DEFAULT nextval('public.usuarios_idusuario_seq'::regclass);
 A   ALTER TABLE public.usuarios ALTER COLUMN idusuario DROP DEFAULT;
       public          postgres    false    217    216    217                      0    17240    razas 
   TABLE DATA           ;   COPY public.razas (idraza, nombreraza, imagen) FROM stdin;
    public          postgres    false    215   �                 0    17247    usuarios 
   TABLE DATA           P   COPY public.usuarios (idusuario, correo, clave, nomusuario, idraza) FROM stdin;
    public          postgres    false    217   �                  0    0    razas_idraza_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.razas_idraza_seq', 5, true);
          public          postgres    false    214                       0    0    usuarios_idusuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuarios_idusuario_seq', 20, true);
          public          postgres    false    216            m           2606    17245    razas razas_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.razas
    ADD CONSTRAINT razas_pkey PRIMARY KEY (idraza);
 :   ALTER TABLE ONLY public.razas DROP CONSTRAINT razas_pkey;
       public            postgres    false    215            o           2606    17263    usuarios usuarios_correo_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_correo_key UNIQUE (correo);
 F   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_correo_key;
       public            postgres    false    217            q           2606    17254    usuarios usuarios_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (idusuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    217            r           2606    17255    usuarios idraza    FK CONSTRAINT     q   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT idraza FOREIGN KEY (idraza) REFERENCES public.razas(idraza);
 9   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT idraza;
       public          postgres    false    215    3181    217               �   x���;� �����ұ�@�t�b\�D`�6�o�3�Z����A�r��U�y�W��o3�Ͷ�
��.���m�D�m����!bHP-a_���%X���:�z��{��KT��FW;U�"�Հ���$Q.�P\�7п)��h����           x�mλv�0 ��9<�3%D����墀��.)%�B��K�����;?얳�Ѫe��EC�����P:�ʨ��s��d�SK�Qo^N����f��R7����i�=���Y�1� � iU�6����]L�ف1B^���	�:�ܓ�.�Ί��N7���:�XOn�'�!4+�?t��"���jz��1O\���C�����a�ɮP�G�[�F� ��]B
(	��U�ǾO(��y����v��p�ڧMP���ĉ��a�eXJ#��6,ɒ$�l�tA     