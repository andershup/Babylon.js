/// <reference path="../../../dist/preview release/babylon.d.ts" />
declare module BABYLON {
    class PBRMaterial extends BABYLON.Material {
        directIntensity: number;
        emissiveIntensity: number;
        environmentIntensity: number;
        private _lightingInfos;
        overloadedShadowIntensity: number;
        overloadedShadeIntensity: number;
        private _overloadedShadowInfos;
        cameraExposure: number;
        cameraContrast: number;
        private _cameraInfos;
        overloadedAmbientIntensity: number;
        overloadedDiffuseIntensity: number;
        overloadedSpecularIntensity: number;
        overloadedEmissiveIntensity: number;
        private _overloadedIntensity;
        overloadedAmbient: Color3;
        overloadedDiffuse: Color3;
        overloadedSpecular: Color3;
        overloadedEmissive: Color3;
        overloadedReflection: Color3;
        overloadedGlossiness: number;
        overloadedGlossinessIntensity: number;
        overloadedReflectionIntensity: number;
        private _overloadedGlossiness;
        disableBumpMap: boolean;
        diffuseTexture: BaseTexture;
        ambientTexture: BaseTexture;
        opacityTexture: BaseTexture;
        reflectionTexture: BaseTexture;
        emissiveTexture: BaseTexture;
        specularTexture: BaseTexture;
        bumpTexture: BaseTexture;
        lightmapTexture: BaseTexture;
        ambientColor: Color3;
        diffuseColor: Color3;
        specularColor: Color3;
        reflectionColor: Color3;
        glossiness: number;
        emissiveColor: Color3;
        useAlphaFromDiffuseTexture: boolean;
        useEmissiveAsIllumination: boolean;
        linkEmissiveWithDiffuse: boolean;
        useSpecularOverAlpha: boolean;
        disableLighting: boolean;
        useLightmapAsShadowmap: boolean;
        opacityFresnelParameters: FresnelParameters;
        emissiveFresnelParameters: FresnelParameters;
        useGlossinessFromSpecularMapAlpha: boolean;
        private _renderTargets;
        private _worldViewProjectionMatrix;
        private _globalAmbientColor;
        private _tempColor;
        private _renderId;
        private _defines;
        private _cachedDefines;
        private _useLogarithmicDepth;
        constructor(name: string, scene: Scene);
        useLogarithmicDepth: boolean;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        private _shouldUseAlphaFromDiffuseTexture();
        getAlphaTestTexture(): BaseTexture;
        private _checkCache(scene, mesh?, useInstances?);
        static PrepareDefinesForLights(scene: Scene, mesh: AbstractMesh, defines: MaterialDefines): boolean;
        private static _scaledDiffuse;
        private static _scaledSpecular;
        private static _scaledEmissive;
        private static _scaledReflection;
        static BindLights(scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        unbind(): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        private _myScene;
        private _myShadowGenerator;
        bind(world: Matrix, mesh?: Mesh): void;
        getAnimatables(): IAnimatable[];
        dispose(forceDisposeEffect?: boolean): void;
        clone(name: string): PBRMaterial;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): PBRMaterial;
    }
}
